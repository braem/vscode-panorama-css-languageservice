# vscode-panorama-css-languageservice

This is a fork of Microsoft's vscode-css-languageservice to provide support for Panorama CSS. See [vscode-panorama-css](https://github.com/panorama-languages-support/vscode-panorama-css).

----------------

Language services for CSS, LESS and SCSS

[![npm Package](https://img.shields.io/npm/v/vscode-css-languageservice.svg?style=flat-square)](https://www.npmjs.org/package/vscode-css-languageservice)
[![NPM Downloads](https://img.shields.io/npm/dm/vscode-css-languageservice.svg)](https://npmjs.org/package/vscode-css-languageservice)
[![Azure DevOps Build Status](https://img.shields.io/azure-devops/build/vscode/2377f926-a00b-46ed-9fb1-79465b3e998b/20.svg?label=Azure%20DevOps)](https://dev.azure.com/vscode/vscode-css-languageservice/_build?definitionId=20)
[![Travis Build Status](https://img.shields.io/travis/microsoft/vscode-css-languageservice.svg?label=Travis)](https://travis-ci.org/Microsoft/vscode-css-languageservice)

Why?
----
The _vscode-css-languageservice_ contains the language smarts behind the CSS, LESS and SCSS editing experience of Visual Studio Code
and the Monaco editor.
 - *doValidation* analyses an input string and returns syntax and lint errors.
 - *doComplete* provides completion proposals for a given location.
 - *doHover* provides a hover text for a given location.
 - *findDefinition* finds the definition of the symbol at the given location.
 - *findReferences* finds all references to the symbol at the given location.
 - *findDocumentHighlights* finds all symbols connected to the given location.
 - *findDocumentSymbols* provides all symbols in the given document
 - *doCodeActions* evaluates code actions for the given location, typically to fix a problem.
 - *findColorSymbols* evaluates all color symbols in the given document
 - *doRename* renames all symbols connected to the given location.
  - *getFoldingRanges* returns folding ranges in the given document.

Installation
------------

    npm install --save vscode-css-languageservice
    
    
API
---

For the complete API see [cssLanguageService.ts](./src/cssLanguageService.ts) and [cssLanguageTypes.ts](./src/cssLanguageTypes.ts) 


Development
-----------


- clone this repo, run yarn
- `yarn test` to compile and run tests

How can I run and debug the service?

- open the folder in VSCode.
- set breakpoints, e.g. in `cssCompletion.ts`
- run the Unit tests from the run viewlet and wait until a breakpoint is hit:
![image](https://user-images.githubusercontent.com/6461412/94239202-bdad4e80-ff11-11ea-99c3-cb9dbeb1c0b2.png)


How can I run and debug the service inside an instance of VSCode?

- run VSCode out of sources setup as described here: https://github.com/Microsoft/vscode/wiki/How-to-Contribute
- use `yarn link vscode-css-languageservice` in `vscode/extensions/css-language-features/server` to run VSCode with the latest changes from `vscode-css-languageservice`
- run VSCode out of source (`vscode/scripts/code.sh|bat`) and open a `.css` file
- in VSCode window that is open on the `vscode-css-languageservice` sources, run command `Debug: Attach to Node process` and pick the `code-oss` process with the `css-language-features` path
![image](https://user-images.githubusercontent.com/6461412/94242567-842b1200-ff16-11ea-8f85-3ebb72d06ba8.png)
- set breakpoints, e.g. in `cssCompletion.ts`
- in the instance run from sources, invoke code completion in the `.css` file



**Note: All CSS entities (properties, at-rules, etc) are sourced from https://github.com/microsoft/vscode-custom-data/tree/master/web-data and transpiled here. For adding new property or fixing existing properties' completion/hover description, please open PR there).**


License
-------

(MIT License)

Copyright 2016, 20 Microsoft

With the exceptions of `build/mdn-documentation.js`, which is built upon content from [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web)
and distributed under CC BY-SA 2.5.
