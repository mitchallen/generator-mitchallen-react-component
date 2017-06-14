# generator-mitchallen-react-component

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> react component project generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mitchallen-react-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mitchallen-react-component
```

Then generate your new project:

```bash
mkdir myproject
cd myproject
yo mitchallen-react-component
```

### Skip Tests

To skip running tests after package creation, use the __--notest__ flag:

```bash
yo mitchallen-react-component --notest
```

## Getting To Know Yeoman

 * [Learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Mitch Allen](http://mitchallen.com)

* * *

## Version History


### Version 0.0.22

* Added --notest flag which will skip test run after package creation

### Version 0.0.21

* Added end routine to run __npm test__ at the end
 * This triggers webpack
 * This causes a side effect causing the generator tests themselves to throw an error (update: use --notest flag to skip)

### Version 0.0.20

* Removed work in progress message from readme

* * *

[npm-image]: https://badge.fury.io/js/generator-mitchallen-react-component.svg
[npm-url]: https://npmjs.org/package/generator-mitchallen-react-component
[travis-image]: https://travis-ci.org/mitchallen/generator-mitchallen-react-component.svg?branch=master
[travis-url]: https://travis-ci.org/mitchallen/generator-mitchallen-react-component
[daviddm-image]: https://david-dm.org/mitchallen/generator-mitchallen-react-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mitchallen/generator-mitchallen-react-component
