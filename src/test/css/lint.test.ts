/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as assert from 'assert';
import { Node, IRule, Level } from '../../parser/cssNodes';
import { Parser } from '../../parser/cssParser';
import { LintVisitor } from '../../services/lint';
import { Rule, Rules, LintConfigurationSettings } from '../../services/lintRules';
import { TextDocument } from '../../cssLanguageTypes';
import { SCSSParser } from '../../parser/scssParser';
import { LESSParser } from '../../parser/lessParser';
import { CSSDataManager } from '../../languageFacts/dataManager';

const cssDataManager = new CSSDataManager({ useDefaultDataProvider: true });

export function assertEntries(node: Node, document: TextDocument, expectedRules: IRule[], expectedMessages: string[] | undefined = undefined, settings = new LintConfigurationSettings()): void {

	const entries = LintVisitor.entries(node, document, settings, cssDataManager, Level.Error | Level.Warning | Level.Ignore);
	const message = `Did not find all linting error [${expectedRules.map(e => e.id).join(', ')}]`;

	assert.equal(entries.length, expectedRules.length, message);

	for (const entry of entries) {
		const index = expectedRules.indexOf(entry.getRule());
		assert.ok(index !== -1, `${entry.getRule().id} found but not expected (${expectedRules.map(r => r.id).join(', ')})`);
		if (expectedMessages) {
			assert.equal(entry.getMessage(), expectedMessages[index]);
		}
	}
}
const parsers = [new Parser(), new LESSParser(), new SCSSParser()];

function assertStyleSheet(input: string, ...rules: Rule[]): void {
	for (const p of parsers) {
		const document = TextDocument.create('test://test/test.css', 'css', 0, input);
		const node = p.parseStylesheet(document);

		assertEntries(node, document, rules);
	}
}

function assertRuleSet(input: string, ...rules: Rule[]): void {
	assertRuleSet2(input, rules);
}

function assertRuleSet2(input: string, rules: Rule[], messages?: string[], settings?: LintConfigurationSettings): void {
	for (const p of parsers) {
		const document = TextDocument.create('test://test/test.css', 'css', 0, input);
		const node = p.internalParse(input, p._parseRuleset)!;
		assertEntries(node, document, rules, messages, settings);
	}
}


function assertFontFace(input: string, ...rules: Rule[]): void {
	for (const p of parsers) {
		const document = TextDocument.create('test://test/test.css', 'css', 0, input);
		const node = p.internalParse(input, p._parseFontFace)!;
		assertEntries(node, document, rules);
	}
}

suite('CSS - Lint', () => {

	test('universal selector, empty rule', function () {
		assertRuleSet('* { color: perty }', Rules.UniversalSelector);
		assertRuleSet('*, div { color: perty }', Rules.UniversalSelector);
		assertRuleSet('div, * { color: perty }', Rules.UniversalSelector);
		assertRuleSet('div > * { color: perty }', Rules.UniversalSelector);
		assertRuleSet('div + * { color: perty }', Rules.UniversalSelector);
	});

	test('empty ruleset', function () {
		assertRuleSet('selector {}', Rules.EmptyRuleSet);
	});

	test('avoid !important', function () {
		assertRuleSet('selector { z-index: 2 !important; }', Rules.AvoidImportant);
	});

	test('avoid id selectors', function () {
		assertRuleSet('#selector { z-index: 2; }', Rules.AvoidIdSelector);
	});

	test('zero with unit', function () {
		assertRuleSet('selector { width: 0px }', Rules.ZeroWithUnit);
		assertRuleSet('selector { width: 0Px }', Rules.ZeroWithUnit);
		assertRuleSet('selector { min-height: 0% }');
	});

	test('duplicate declarations', function () {
		assertRuleSet('selector { color: perty; color: perty }', Rules.DuplicateDeclarations, Rules.DuplicateDeclarations);
	});

	test('unknown properties', function () {
		assertRuleSet('selector { box-shadow: none }'); // no error
		assertRuleSet('selector { box-property: "rest is missing" }', Rules.UnknownProperty);
		assertRuleSet(':export { prop: "some" }'); // no error for properties inside :export
		assertRuleSet2('selector { foo: "some"; bar: 0px }', [], undefined, new LintConfigurationSettings({ validProperties: ['foo', 'bar'] }));
		assertRuleSet2('selector { foo: "some"; }', [], undefined, new LintConfigurationSettings({ validProperties: ['foo', null] }));
		assertRuleSet2('selector { bar: "some"; }', [Rules.UnknownProperty], undefined, new LintConfigurationSettings({ validProperties: ['foo'] }));
		assertRuleSet2('selector { Box-Property: "rest is missing" }', [Rules.UnknownProperty], ["Unknown property: 'Box-Property'"]);
	});

	test('box model', function () {
		// border shorthand, zero values
		assertRuleSet('.mybox { height: 100px;         border: initial;           }');
		assertRuleSet('.mybox { height: 100px;         border: unset;             }');
		assertRuleSet('.mybox { height: 100px;         border: none;              }');
		assertRuleSet('.mybox { height: 100px;         border: hidden;            }');
		assertRuleSet('.mybox { height: 100px;         border: 0;                 }');
		assertRuleSet('.mybox { height: 100px;         border: 0 solid;           }');
		assertRuleSet('.mybox { height: 100px;         border: 1px none;          }');
		assertRuleSet('.mybox { height: 100px;         border: 0 solid #ccc;      }');
		// order doesn't matter
		assertRuleSet('.mybox { border: initial;       height: 100px;             }');
		assertRuleSet('.mybox { border: 0;             height: 100px;             }');

		// border shorthand, non-zero values
		assertRuleSet('.mybox { height: 100px;         border: 1px;               }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { height: 100px;         border: 1px solid;         }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { width: 100px;          border: 1px;               }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		// order doesn't matter
		assertRuleSet('.mybox { border: 1px;           height: 100px;             }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { border: 1px solid;     height: 100px;             }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);

		// border-top shorthand, zero values
		assertRuleSet('.mybox { height: 100px;         border-top: initial;       }');
		assertRuleSet('.mybox { height: 100px;         border-top: none;          }');
		assertRuleSet('.mybox { height: 100px;         border-top: 0;             }');
		assertRuleSet('.mybox { height: 100px;         border-top: 0 solid;       }');
		assertRuleSet('.mybox { width: 100px;          border-top: 1px;           }');
		assertRuleSet('.mybox { width: 100px;          border-top: 1px solid;     }');

		// border-top shorthand, non-zero values
		assertRuleSet('.mybox { height: 100px;         border-top: 1px;           }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize); // shorthand | single value | 1px
		assertRuleSet('.mybox { height: 100px;         border-top: 1px solid;     }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize); // shorthand |

		// border-width shorthand, zero values
		assertRuleSet('.mybox { height: 100px;         border-width: 0;           }');
		assertRuleSet('.mybox { height: 100px;         border-width: 0 0;         }');
		assertRuleSet('.mybox { height: 100px;         border-width: 0 0 0;       }');
		assertRuleSet('.mybox { height: 100px;         border-width: 0 0 0 0;     }');
		assertRuleSet('.mybox { height: 100px;         border-width: 0 1px;       }');
		assertRuleSet('.mybox { height: 100px;         border-width: 0 1px 0 1px; }');
		assertRuleSet('.mybox { width: 100px;          border-width: 1px 0;       }');
		assertRuleSet('.mybox { width: 100px;          border-width: 1px 0 1px 0; }');

		// border-width shorthand, non-zero values
		assertRuleSet('.mybox { height: 100px;         border-width: 1px;         }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { height: 100px;         border-width: 0 0 1px;     }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { width: 100px;          border-width: 0 1px;       }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { width: 100px;          border-width: 0 0 0 1px;   }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);

		// border-style shorthand, zero values
		assertRuleSet('.mybox { height: 100px;         border-style: unset;       }');
		assertRuleSet('.mybox { height: 100px;         border-style: initial;     }');
		assertRuleSet('.mybox { height: 100px;         border-style: none;        }');
		assertRuleSet('.mybox { height: 100px;         border-style: hidden;      }');

		// border-style shorthand, non-zero values
		assertRuleSet('.mybox { height: 100px;         border-style: solid;       }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { height: 100px;         border-style: dashed;      }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);

		// border-top-width property, zero values
		assertRuleSet('.mybox { height: 100px;         border-top-width: 0;       }');
		assertRuleSet('.mybox { width: 100px;          border-top-width: 1px;     }');

		// border-top-width property, non-zero values
		assertRuleSet('.mybox { height: 100px;         border-top-width: 1px;     }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);

		// border-top-style property, zero values
		assertRuleSet('.mybox { height: 100px;         border-top-style: unset;   }');
		assertRuleSet('.mybox { width: 100px;          border-top-style: solid;   }');

		// border-top-style property, non-zero values
		assertRuleSet('.mybox { height: 100px;         border-top-style: solid;   }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);

		// padding shorthand, zero values
		assertRuleSet('.mybox { height: 100px;         padding: initial;          }');
		assertRuleSet('.mybox { height: 100px;         padding: unset;            }');
		assertRuleSet('.mybox { height: 100px;         padding: 0;                }');
		assertRuleSet('.mybox { height: 100px;         padding: 0 0;              }');
		assertRuleSet('.mybox { height: 100px;         padding: 0 0 0;            }');
		assertRuleSet('.mybox { height: 100px;         padding: 0 0 0 0;          }');
		assertRuleSet('.mybox { height: 100px;         padding: 0 1px;            }');
		assertRuleSet('.mybox { height: 100px;         padding: 0 1px 0 1px;      }');
		assertRuleSet('.mybox { width: 100px;          padding: 1px 0;            }');
		assertRuleSet('.mybox { width: 100px;          padding: 1px 0 1px;        }');

		// padding shorthand, non-zero values
		assertRuleSet('.mybox { height: 100px;         padding: 1px;              }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { height: 100px;         padding: 1px 0;            }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
		assertRuleSet('.mybox { height: 100px;         padding: 0 0 1px;          }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);

		// property be overriden
		assertRuleSet('.mybox { height: 100px;         border: 1px;               border-top: 0; border-bottom: 0; }');

		// imcomplete rules
		assertRuleSet('.mybox { padding:; }');
		assertRuleSet('.mybox { border: ');
		assertRuleSet('.mybox { height: 100px;         padding: 1px;              border: }', Rules.BewareOfBoxModelSize, Rules.BewareOfBoxModelSize);
	});

	test('vendor specific prefixes', function () {
		assertRuleSet('selector { transform: none; }');
		assertRuleSet('selector { --transform: none; }');
	});

	test('font-face required properties', function () {
		assertFontFace('@font-face {  }', Rules.RequiredPropertiesForFontFace);
		assertFontFace('@font-face { src: url(test.tff) }', Rules.RequiredPropertiesForFontFace);
		assertFontFace('@font-face { font-family: \'name\' }', Rules.RequiredPropertiesForFontFace);
		assertFontFace('@font-face { src: url(test.tff); font-family: \'name\' }'); // no error
	});

	test('keyframes', function () {
		assertStyleSheet('@keyframes foo { }');
	});
});
