![typhonjs-config-jspm-parse](http://i.imgur.com/G3zAIuf.png)

[![NPM](https://img.shields.io/npm/v/typhonjs-istanbul-instrument-jspm.svg?label=npm)](https://www.npmjs.com/package/typhonjs-istanbul-instrument-jspm)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-node-jspm/typhonjs-istanbul-instrument-jspm/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

[![Build Status](https://travis-ci.org/typhonjs-node-jspm/typhonjs-istanbul-instrument-jspm.svg?branch=master)](https://travis-ci.org/typhonjs-node-jspm/typhonjs-istanbul-instrument-jspm)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-node-jspm/typhonjs-istanbul-instrument-jspm.svg)](https://codecov.io/github/typhonjs-node-jspm/typhonjs-istanbul-instrument-jspm)
[![Dependency Status](https://www.versioneye.com/user/projects/56e5c275df573d00472cd46f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/56e5c275df573d00472cd46f)

Provides a NPM module to add Istanbul instrumentation to JSPM / SystemJS by replacing the System.translate hook. 

By using this module SystemJS can be instrumented for code coverage with Istanbul with minimal effort. 

For a comprehensive ES6 build / testing / publishing NPM module please see [typhonjs-npm-build-test](https://www.npmjs.com/package/typhonjs-npm-build-test) as it combines this module along with transpiling ES6 sources with Babel, pre-publish script detection, ESDoc dependencies, testing with Mocha / Istanbul and an Istanbul instrumentation hook for JSPM / SystemJS tests. 

