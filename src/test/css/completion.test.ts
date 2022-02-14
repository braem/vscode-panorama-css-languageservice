/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as assert from 'assert';
import * as path from 'path';
import {
	getCSSLanguageService,
	LanguageSettings, PropertyCompletionContext, PropertyValueCompletionContext, URILiteralCompletionContext, ImportPathCompletionContext,
	TextDocument, CompletionList, Position, CompletionItemKind, InsertTextFormat, Range, Command, MarkupContent, MixinReferenceCompletionContext, getSCSSLanguageService, getLESSLanguageService, ICSSDataProvider, newCSSDataProvider
} from '../../cssLanguageService';
import { getDocumentContext } from '../testUtil/documentContext';
import { URI } from 'vscode-uri';
import { getFsProvider } from '../testUtil/fsProvider';
import { TextEdit } from 'vscode-languageserver-types';

export interface ItemDescription {
	label: string;
	detail?: string;
	documentation?: string | MarkupContent | null;
	/**
	 * Only test that the documentation includes the substring
	 */
	documentationIncludes?: string;
	kind?: CompletionItemKind;
	insertTextFormat?: InsertTextFormat;
	resultText?: string;
	notAvailable?: boolean;
	command?: Command;
	sortText?: string;
}

export function assertCompletion(completions: CompletionList, expected: ItemDescription, document: TextDocument) {
	const matches = completions.items.filter(completion => {
		return completion.label === expected.label;
	});
	if (expected.notAvailable) {
		assert.equal(matches.length, 0, expected.label + " should not be present");
	} else {
		assert.equal(matches.length, 1, expected.label + " should only existing once: Actual: " + completions.items.map(c => c.label).join(', '));
	}

	const match = matches[0];
	if (expected.detail) {
		assert.equal(match.detail, expected.detail);
	}
	if (expected.documentation) {
		assert.deepEqual(match.documentation, expected.documentation);
	}
	if (expected.documentationIncludes) {
		assert.ok(match.documentation !== undefined);
		if (typeof match.documentation === 'string') {
			assert.ok(match.documentation.indexOf(expected.documentationIncludes) !== -1);
		} else {
			assert.ok(match.documentation!.value.indexOf(expected.documentationIncludes) !== -1);
		}
	}
	if (expected.kind) {
		assert.equal(match.kind, expected.kind);
	}
	if (expected.resultText && match.textEdit) {
		const edit = TextEdit.is(match.textEdit) ? match.textEdit : TextEdit.replace(match.textEdit.replace, match.textEdit.newText);
		assert.equal(TextDocument.applyEdits(document, [edit]), expected.resultText);
	}
	if (expected.insertTextFormat) {
		assert.equal(match.insertTextFormat, expected.insertTextFormat);
	}
	if (expected.command) {
		assert.deepEqual(match.command, expected.command);
	}
	if (expected.sortText) {
		assert.equal(match.sortText, expected.sortText);
	}
};

export type ExpectedCompetions = {
	count?: number;
	items?: ItemDescription[];
	participant?: {
		onProperty?: PropertyCompletionContext[];
		onPropertyValue?: PropertyValueCompletionContext[];
		onURILiteralValue?: URILiteralCompletionContext[];
		onImportPath?: ImportPathCompletionContext[];
		onMixinReference?: MixinReferenceCompletionContext[];
	};
};

export async function testCompletionFor(
	value: string,
	expected: ExpectedCompetions,
	settings: LanguageSettings = {
		completion: {
			triggerPropertyValueCompletion: true,
			completePropertyWithSemicolon: false
		}
	},
	testUri: string = 'test://test/test.css',
	workspaceFolderUri: string = 'test://test',
	customData: ICSSDataProvider[] = [],
) {
	const offset = value.indexOf('|');
	assert.ok(offset !== -1, '| missing in ' + value);
	value = value.substr(0, offset) + value.substr(offset + 1);

	const actualPropertyContexts: PropertyCompletionContext[] = [];
	const actualPropertyValueContexts: PropertyValueCompletionContext[] = [];
	const actualURILiteralValueContexts: URILiteralCompletionContext[] = [];
	const actualImportPathContexts: ImportPathCompletionContext[] = [];
	const actualMixinReferenceContexts: MixinReferenceCompletionContext[] = [];

	const lang = path.extname(testUri).substr(1);
	const lsOptions = { fileSystemProvider: getFsProvider() };
	let ls;
	if (lang === 'scss') {
		ls = getSCSSLanguageService(lsOptions);
	} else if (lang === 'less') {
		ls = getLESSLanguageService(lsOptions);
	} else {
		ls = getCSSLanguageService(lsOptions);
	}
	ls.setDataProviders(true, customData);
	ls.configure(settings);

	if (expected.participant) {
		ls.setCompletionParticipants([
			{
				onCssProperty: context => actualPropertyContexts.push(context),
				onCssPropertyValue: context => actualPropertyValueContexts.push(context),
				onCssURILiteralValue: context => actualURILiteralValueContexts.push(context),
				onCssImportPath: context => actualImportPathContexts.push(context),
				onCssMixinReference: context => actualMixinReferenceContexts.push(context)
			}
		]);
	}

	const document = TextDocument.create(testUri, lang, 0, value);
	const position = Position.create(0, offset);
	const jsonDoc = ls.parseStylesheet(document);

	const context = getDocumentContext(workspaceFolderUri);

	const list = await ls.doComplete2(document, position, jsonDoc, context);
	if (typeof expected.count === 'number') {
		assert.equal(list.items.length, expected.count);
	}
	if (expected.items) {
		for (const item of expected.items) {
			assertCompletion(list, item, document);
		}
	}
	if (expected.participant) {
		if (expected.participant.onProperty) {
			assert.deepEqual(actualPropertyContexts, expected.participant.onProperty);
		}
		if (expected.participant.onPropertyValue) {
			assert.deepEqual(actualPropertyValueContexts, expected.participant.onPropertyValue);
		}
		if (expected.participant.onURILiteralValue) {
			assert.deepEqual(actualURILiteralValueContexts, expected.participant.onURILiteralValue);
		}
		if (expected.participant.onImportPath) {
			assert.deepEqual(actualImportPathContexts, expected.participant.onImportPath);
		}
		if (expected.participant.onMixinReference) {
			assert.deepEqual(actualMixinReferenceContexts, expected.participant.onMixinReference);
		}
	}
};

suite('CSS - Completion', () => {



	test('stylesheet', async function () {
		await testCompletionFor('| ', {
			items: [
				{ label: '@keyframes', resultText: '@keyframes ' },
				{ label: 'div', resultText: 'div ' }
			]
		});
		await testCompletionFor('| body {', {
			items: [
				{ label: '@keyframes', resultText: '@keyframes body {' },
				{ label: 'html', resultText: 'html body {' }
			]
		});
		await testCompletionFor('h| {', {
			items: [
				{ label: 'html', resultText: 'html {' }
			]
		});
	});
	test('selectors', async function () {
		await testCompletionFor('a:h| ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
			]
		});
		await testCompletionFor('a::h| ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
			]
		});
		await testCompletionFor('a::| ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
			]
		});
		await testCompletionFor('a:| ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
			]
		});
		await testCompletionFor('a:|hover ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
			]
		});
		await testCompletionFor('a::| foo { }', { // #104111
			items: [
				{ label: ':hover', resultText: 'a:hover foo { }' }
			]
		});
		await testCompletionFor('a:| foo { }', { // #104111
			items: [
				{ label: ':hover', resultText: 'a:hover foo { }' }
				//{ label: '::after', resultText: 'a::after foo { }' }
			]
		});
		await testCompletionFor('a#| ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
				//{ label: '::after', resultText: 'a::after ' }
			]
		});
		await testCompletionFor('a.| ', {
			items: [
				{ label: ':hover', resultText: 'a:hover ' }
				//{ label: '::after', resultText: 'a::after ' }
			]
		});
		await testCompletionFor('.a:| ', {
			items: [
				{ label: ':hover', resultText: '.a:hover ' }
				//{ label: '::after', resultText: '.a::after ' }
			]
		});
	});
	test('properties', async function () {
		await testCompletionFor('body {|', {
			items: [
				{ label: 'text-align', resultText: 'body {text-align: ' },
				{ label: 'background-color', resultText: 'body {background-color: ' }
			]
		});
		await testCompletionFor('body { ver|', {
			items: [
				{ label: 'vertical-align', resultText: 'body { vertical-align: ' }
			]
		});
		await testCompletionFor('body { vertical-ali|gn', {
			items: [
				{ label: 'vertical-align', resultText: 'body { vertical-align: ' }
			]
		});
		await testCompletionFor('body { vertical-align|', {
			items: [
				{ label: 'vertical-align', resultText: 'body { vertical-align: ' }
			]
		});
		await testCompletionFor('body { vertical-align|: bottom;}', {
			items: [
				{ label: 'vertical-align', resultText: 'body { vertical-align: bottom;}' }
			]
		});
		await testCompletionFor('body { trans| ', {
			items: [
				{ label: 'transition', resultText: 'body { transition:  ' }
			]
		});
	});
	test('values', async function () {
		await testCompletionFor('body { vertical-align:| bottom;}', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align:bottom bottom;}' }
			]
		});
		await testCompletionFor('body { vertical-align: |bottom;}', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align: bottom;}' }
			]
		});
		await testCompletionFor('body { vertical-align: bott|', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align: bottom' }
			]
		});
		await testCompletionFor('body { vertical-align: bott|om }', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align: bottom }' }
			]
		});
		await testCompletionFor('body { vertical-align: bottom| }', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align: bottom }' }
			]
		});
		await testCompletionFor('body { vertical-align:bott|', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align:bottom' }
			]
		});
		await testCompletionFor('body { vertical-align: bottom|; }', {
			items: [
				{ label: 'bottom', resultText: 'body { vertical-align: bottom; }' }
			]
		});
		await testCompletionFor('body { vertical-align: bottom;| }', {
			count: 0
		});
		await testCompletionFor('body { vertical-align: bottom; |}', {
			items: [
				{ label: 'text-align', resultText: 'body { vertical-align: bottom; text-align: }' }
			]
		});
		await testCompletionFor('.foo { te:n| }', {
			items: [
				{ label: 'n', notAvailable: true }
			]
		});
	});
	test('functions', async function () {
		await testCompletionFor('@keyframes fadeIn { 0% { transform: s|', {
			items: [
				{ label: 'scaleX()', resultText: '@keyframes fadeIn { 0% { transform: scaleX($1)', insertTextFormat: InsertTextFormat.Snippet }
			]
		});
	});
	test('positions', async function () {
		await testCompletionFor('html { background-position: t|', {
			items: [
				{ label: 'top', resultText: 'html { background-position: top' },
				{ label: 'right', resultText: 'html { background-position: right' }
			]
		});
	});
	test('units', async function () {
		await testCompletionFor('body { margin-left: -2px| }', {
			items: [
				{ label: '-2px', resultText: 'body { margin-left: -2px }' }
			]
		});
	});
	test('unknown', async function () {
		await testCompletionFor('body { notexisting: |;}', {
			count: 0
		});
		await testCompletionFor('.foo { unknown: foo; } .bar { unknown:| }', {
			items: [
				{ label: 'foo', kind: CompletionItemKind.Value, resultText: '.foo { unknown: foo; } .bar { unknown:foo }' }
			]
		});
	});
	test('colors', async function () {
		await testCompletionFor('body { border-right: |', {
			items: [
				{ label: 'cyan', resultText: 'body { border-right: cyan' },
				{ label: 'dotted', resultText: 'body { border-right: dotted' }
			]
		});
		await testCompletionFor('body { border-right: cyan| dotted 2px ', {
			items: [
				{ label: 'cyan', resultText: 'body { border-right: cyan dotted 2px ' },
				{ label: 'darkcyan', resultText: 'body { border-right: darkcyan dotted 2px ' }
			]
		});
		await testCompletionFor('body { border-right: dotted 2px |', {
			items: [
				{ label: 'cyan', resultText: 'body { border-right: dotted 2px cyan' }
			]
		});
		await testCompletionFor('.foo { background-color: #123456; } .bar { background-color:| }', {
			items: [
				{ label: '#123456', kind: CompletionItemKind.Color, resultText: '.foo { background-color: #123456; } .bar { background-color:#123456 }' }
			]
		});
		await testCompletionFor('.bar { background-color: #123| }', {
			items: [
				{ label: '#123', notAvailable: true }
			]
		});
		await testCompletionFor('.foo { background-color: r|', {
			items: [
				{ label: 'rgb', kind: CompletionItemKind.Function, resultText: '.foo { background-color: rgb(${1:red}, ${2:green}, ${3:blue})' },
				{ label: 'rgba', kind: CompletionItemKind.Function, resultText: '.foo { background-color: rgba(${1:red}, ${2:green}, ${3:blue}, ${4:alpha})' },
				{ label: 'red', kind: CompletionItemKind.Color, resultText: '.foo { background-color: red' }
			]
		});
	});
	test('variables', async function () {
		await testCompletionFor(':root { --myvar: red; } body { color: |', {
			items: [
				{ label: '--myvar', documentation: 'red', resultText: ':root { --myvar: red; } body { color: var(--myvar)' },
			]
		});
		await testCompletionFor('body { --myvar: 0px; border-right: var| ', {
			items: [
				{ label: '--myvar', documentation: '0px', resultText: 'body { --myvar: 0px; border-right: var(--myvar) ' },
			]
		});
		await testCompletionFor('body { --myvar: 0px; border-right: var(| ', {
			items: [
				{ label: '--myvar', documentation: '0px', resultText: 'body { --myvar: 0px; border-right: var(--myvar ' },
			]
		});
		await testCompletionFor('a { color: | } :root { --bg-color: red; } ', {
			items: [
				{ label: '--bg-color', documentation: 'red', resultText: 'a { color: var(--bg-color) } :root { --bg-color: red; } ' },
			]
		});
		await testCompletionFor('body { border-left: --borderwidth; border-right: var(| ', {
			items: [
				{ label: '--borderwidth', documentation: undefined, resultText: 'body { border-left: --borderwidth; border-right: var(--borderwidth ' },
			]
		});
	});

	test('suggestParticipants', async function () {
		await testCompletionFor('html { bac|', {
			participant: {
				onProperty: [{ propertyName: 'bac', range: newRange(7, 10) }],
				onPropertyValue: []
			}
		});
		await testCompletionFor('html { disp|lay: none', {
			participant: {
				onProperty: [{ propertyName: 'disp', range: newRange(7, 11) }],
				onPropertyValue: []
			}
		});
		await testCompletionFor('html { background-position: t|', {
			items: [
				{ label: 'center' },
			],
			participant: {
				onProperty: [],
				onPropertyValue: [{ propertyName: 'background-position', propertyValue: 't', range: newRange(28, 29) }]
			}
		});

		await testCompletionFor(`html { background-image: url(|)`, {
			count: 0,
			participant: {
				onURILiteralValue: [{ uriValue: '', position: Position.create(0, 29), range: newRange(29, 29) }]
			}
		});
		await testCompletionFor(`html { background-image: url('|')`, {
			count: 0,
			participant: {
				onURILiteralValue: [{ uriValue: `''`, position: Position.create(0, 30), range: newRange(29, 31) }]
			}
		});
		await testCompletionFor(`html { background-image: url("b|")`, {
			count: 0,
			participant: {
				onURILiteralValue: [{ uriValue: `"b"`, position: Position.create(0, 31), range: newRange(29, 32) }]
			}
		});
		await testCompletionFor(`html { background: url("b|"`, {
			count: 0,
			participant: {
				onURILiteralValue: [{ uriValue: `"b"`, position: Position.create(0, 25), range: newRange(23, 26) }]
			}
		});

		await testCompletionFor(`@import './|'`, {
			count: 0,
			participant: {
				onImportPath: [{ pathValue: `'./'`, position: Position.create(0, 11), range: newRange(8, 12) }]
			}
		});
		await testCompletionFor(`@import "./|";`, {
			count: 0,
			participant: {
				onImportPath: [{ pathValue: `"./"`, position: Position.create(0, 11), range: newRange(8, 12) }]
			}
		});
		await testCompletionFor(`@import "./|foo";`, {
			count: 0,
			participant: {
				onImportPath: [{ pathValue: `"./foo"`, position: Position.create(0, 11), range: newRange(8, 15) }]
			}
		});
	});

	test('Property completeness', async () => {
		await testCompletionFor('html { text-decoration:|', {
			items: [
				{ label: 'none' }
			]
		});
		await testCompletionFor('body { disp| ', {
			items: [
				{ label: 'min-height', resultText: 'body { min-height:  ', command: { title: 'Suggest', command: 'editor.action.triggerSuggest' } }
			]
		});
		await testCompletionFor('body { min-he| ', {
			items: [
				{ label: 'min-height', resultText: 'body { min-height: $0; ', command: { title: 'Suggest', command: 'editor.action.triggerSuggest' } }
			]
		}, {});
		await testCompletionFor('body { min-he| ', {
			items: [
				{ label: 'min-height', resultText: 'body { min-height: $0; ', command: { title: 'Suggest', command: 'editor.action.triggerSuggest' } }
			]
		}, { completion: undefined });
		await testCompletionFor('body { min-he| ', {
			items: [
				{ label: 'min-height', resultText: 'body { min-height: $0; ', command: { title: 'Suggest', command: 'editor.action.triggerSuggest' } }
			]
		}, { completion: { triggerPropertyValueCompletion: true } });
		await testCompletionFor('body { min-he| ', {
			items: [
				{ label: 'min-height', resultText: 'body { min-height: $0; ', command: undefined }
			]
		}, { completion: { triggerPropertyValueCompletion: false } });

		await testCompletionFor('body { min-he| ', {
			items: [
				{ label: 'min-height', resultText: 'body { min-height:  ', command: undefined }
			]
		}, { completion: { triggerPropertyValueCompletion: false, completePropertyWithSemicolon: false } });
	});

	test(`Color swatch for variables that's color`, async () => {
		await testCompletionFor('.foo { --foo: #bbb; color: --| }', {
			items: [
				{
					label: '--foo',
					documentation: '#bbb',
					kind: CompletionItemKind.Color
				}
			]
		});

		await testCompletionFor('.foo { --foo: #bbbbbb; color: --| }', {
			items: [
				{
					label: '--foo',
					documentation: '#bbbbbb',
					kind: CompletionItemKind.Color
				}
			]
		});

		await testCompletionFor('.foo { --foo: red; color: --| }', {
			items: [
				{
					label: '--foo',
					documentation: 'red',
					kind: CompletionItemKind.Color
				}
			]
		});

		await testCompletionFor('.foo { --foo: RED; color: --| }', {
			items: [
				{
					label: '--foo',
					documentation: 'RED',
					kind: CompletionItemKind.Color
				}
			]
		});


		await testCompletionFor('.foo { --foo: #bbb; color: var(|) }', {
			items: [
				{
					label: '--foo',
					documentation: '#bbb',
					kind: CompletionItemKind.Color
				}
			]
		});
	});

	test('Seimicolon on property completion', async () => {
		await testCompletionFor('.foo { | }', {
			items: [
				{
					label: 'position',
					resultText: '.foo { position: $0; }'
				}
			]
		}, { completion: { triggerPropertyValueCompletion: true, completePropertyWithSemicolon: true } });

		await testCompletionFor('.foo { p| }', {
			items: [
				{
					label: 'position',
					resultText: '.foo { position: $0; }'
				}
			]
		}, { completion: { triggerPropertyValueCompletion: true, completePropertyWithSemicolon: true } });

		await testCompletionFor('.foo { p|o }', {
			items: [
				{
					label: 'position',
					resultText: '.foo { position:  }'
				}
			]
		}, { completion: { triggerPropertyValueCompletion: true, completePropertyWithSemicolon: true } });

		await testCompletionFor('.foo { p|os: relative; }', {
			items: [
				{
					label: 'position',
					resultText: '.foo { position: relative; }'
				}
			]
		}, { completion: { triggerPropertyValueCompletion: true, completePropertyWithSemicolon: true } });

		await testCompletionFor('.foo { p|: ; }', {
			items: [
				{
					label: 'position',
					resultText: '.foo { position: ; }'
				}
			]
		}, { completion: { triggerPropertyValueCompletion: true, completePropertyWithSemicolon: true } });

		await testCompletionFor('.foo { p|; }', {
			items: [
				{
					label: 'position',
					resultText: '.foo { position: ; }'
				}
			]
		}, { completion: { triggerPropertyValueCompletion: true, completePropertyWithSemicolon: true } });
	});

	test('Properties sorted by relevance', async () => {
		const customData = [newCSSDataProvider({
			version: 1,
			properties: [
				{ name: 'foo', relevance: 93 },
				{ name: 'bar', relevance: 1 },
				{ name: 'xoo' },
				{ name: 'bar2', relevance: 0 },
			]
		})];
		await testCompletionFor('.foo { | }', {
			items: [
				{ label: 'foo', sortText: 'd_a2' },
				{ label: 'bar', sortText: 'd_fe' },
				{ label: 'xoo', sortText: 'd_cd' },
				{ label: 'bar2', sortText: 'd_ff' }
			]
		}, undefined, undefined, undefined, customData);
		assert.ok('d_a2' < 'd_fe');
	});

	const testFixturesPath = path.join(__dirname, '../../../../test');

	test('CSS url() Path completion', async function () {
		const testUri = URI.file(path.resolve(testFixturesPath, 'pathCompletionFixtures/about/about.css')).toString();
		const workspaceFolderUri = URI.file(path.resolve(testFixturesPath)).toString();

		await testCompletionFor('html { background-image: url("./|")', {
			items: [
				{ label: 'about.html', resultText: 'html { background-image: url("./about.html")' }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url('../|')`, {
			items: [
				{ label: 'about/', resultText: `html { background-image: url('../about/')` },
				{ label: 'index.html', resultText: `html { background-image: url('../index.html')` },
				{ label: 'src/', resultText: `html { background-image: url('../src/')` }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url('../src/a|')`, {
			items: [
				{ label: 'feature.js', resultText: `html { background-image: url('../src/feature.js')` },
				{ label: 'data/', resultText: `html { background-image: url('../src/data/')` },
				{ label: 'test.js', resultText: `html { background-image: url('../src/test.js')` }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url('../src/data/f|.asar')`, {
			items: [
				{ label: 'foo.asar', resultText: `html { background-image: url('../src/data/foo.asar')` }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url('|')`, {
			items: [
				{ label: 'about.html', resultText: `html { background-image: url('about.html')` },
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url('/|')`, {
			items: [
				{ label: 'pathCompletionFixtures/', resultText: `html { background-image: url('/pathCompletionFixtures/')` }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url('/pathCompletionFixtures/|')`, {
			items: [
				{ label: 'about/', resultText: `html { background-image: url('/pathCompletionFixtures/about/')` },
				{ label: 'index.html', resultText: `html { background-image: url('/pathCompletionFixtures/index.html')` },
				{ label: 'src/', resultText: `html { background-image: url('/pathCompletionFixtures/src/')` }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`html { background-image: url("/|")`, {
			items: [
				{ label: 'pathCompletionFixtures/', resultText: `html { background-image: url("/pathCompletionFixtures/")` }
			]
		}, undefined, testUri, workspaceFolderUri);
	});

	test('CSS url() Path Completion - Unquoted url', async function () {
		const testUri = URI.file(path.resolve(testFixturesPath, 'pathCompletionFixtures/about/about.css')).toString();
		const workspaceFolderUri = URI.file(path.resolve('testFixturesPath')).toString();

		await testCompletionFor('html { background-image: url(./|)', {
			items: [
				{ label: 'about.html', resultText: 'html { background-image: url(./about.html)' }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor('html { background-image: url(./a|)', {
			items: [
				{ label: 'about.html', resultText: 'html { background-image: url(./about.html)' }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor('html { background-image: url(../|src/)', {
			items: [
				{ label: 'about/', resultText: 'html { background-image: url(../about/)' }
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor('html { background-image: url(../s|rc/)', {
			items: [
				{ label: 'about/', resultText: 'html { background-image: url(../about/)' }
			]
		}, undefined, testUri, workspaceFolderUri);
	});

	test('CSS @import Path completion', async function () {
		const testUri = URI.file(path.resolve(testFixturesPath, 'pathCompletionFixtures/about/about.css')).toString();
		const workspaceFolderUri = URI.file(path.resolve(testFixturesPath)).toString();

		await testCompletionFor(`@import './|'`, {
			items: [
				{ label: 'about.html', resultText: `@import './about.html'` },
			]
		}, undefined, testUri, workspaceFolderUri);

		await testCompletionFor(`@import '../|'`, {
			items: [
				{ label: 'about/', resultText: `@import '../about/'` },
				{ label: 'scss/', resultText: `@import '../scss/'` },
				{ label: 'index.html', resultText: `@import '../index.html'` },
				{ label: 'src/', resultText: `@import '../src/'` }
			]
		}, undefined, testUri, workspaceFolderUri);
	});

	test('Completion should ignore files/folders starting with dot', async function () {
		const testUri = URI.file(path.resolve(testFixturesPath, 'pathCompletionFixtures/about/about.css')).toString();
		const workspaceFolderUri = URI.file(path.resolve(testFixturesPath)).toString();

		await testCompletionFor('html { background-image: url("../|")', {
			count: 4
		}, undefined, testUri, workspaceFolderUri);

	});

});

function newRange(start: number, end: number) {
	return Range.create(Position.create(0, start), Position.create(0, end));
}
