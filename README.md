# generator-mitchallen-react-component

<p align="left">
  <a href="https://travis-ci.org/mitchallen/generator-mitchallen-react-component">
    <img src="https://img.shields.io/travis/mitchallen/generator-mitchallen-react-component.svg?style=flat-square" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/generator-mitchallen-react-component">
    <img src="https://codecov.io/gh/mitchallen/generator-mitchallen-react-component/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/generator-mitchallen-react-component">
    <img src="http://img.shields.io/npm/dt/generator-mitchallen-react-component.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/generator-mitchallen-react-component">
    <img src="http://img.shields.io/npm/v/generator-mitchallen-react-component.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/generator-mitchallen-react-component">
    <img src="https://img.shields.io/github/license/mitchallen/generator-mitchallen-react-component.svg" alt="License"></a>
  </a>
</p>


> react component project generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mitchallen-react-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

__Note:__ You may need to preface ```npm install -g``` commands with ```sudo```.

```bash
npm install -g yo
npm install -g generator-mitchallen-react-component
```

### Create and Generate Project

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

* * *

## Getting To Know Yeoman

 * [Learn more about Yeoman](http://yeoman.io/).

* * *

## Testing

### Install Test Framework

To run the generator tests you will need to globally install __jest__ (http://facebook.github.io/jest/).

```bash
npm install -g jest jest-cli
```

To test, go to the root folder and type:

    npm test

* * *

## License

MIT © [Mitch Allen](http://mitchallen.com)
 
* * *

## Version History

### Version 0.0.33

* Corrected documentation on what test framework needs to be installed where
* Removed link script

### Version 0.0.32

* removed extra code coverage step from .travis.xml

### Version 0.0.31

* Install codecov dev dependency for test coverage
* Adjusted test-coverage script

### Version 0.0.30

* Add test-coverage script

### Version 0.0.29

* Added codecoverage support to .travis.yml
* Added a .npmignore file

### Version 0.0.28

* Updated _travis.yml template to install jest

### Version 0.0.27

* Updated .travis.yml to install jest before running generator tests

### Version 0.0.26

* Cleaned up console logging

### Version 0.0.25

* Added note about installing __jest__ globally

### Version 0.0.24

* Updated badges in readme

### Version 0.0.23

* Generator test case now passes --notest option

### Version 0.0.22

* Added --notest flag which will skip test run after package creation

### Version 0.0.21

* Added end routine to run __npm test__ at the end
 * This triggers webpack
 * This causes a side effect causing the generator tests themselves to throw an error (update: use --notest flag to skip)

### Version 0.0.20

* Removed work in progress message from readme

* * *

