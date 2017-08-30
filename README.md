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

### React peer dependency

Now __react__ is only installed as a peer dependency. It is assumed that whatever app the component is dropped into will install react.  This avoid errors with some libraries that won't compile if two versions of react are found in the same project.  

Avoid installing react locally to avoid any future conflicts. To run the tests you may need to install react globally, or push to a ci server that installs react before running your tests.  The generated CircleCI script is setup to do that.

* * *

## How-To Article

For more detailed instructions, see this article:

* [How to Create a React Component Project](http://scriptable.com/create-react-component-project/)

* * *

## Continuous Integration Support

There seems to be issues running [webpack](https://webpack.github.io/) under [TravisCI](https://travis-ci.org). So I've made the following changes:

* Added support for [CircleCI](https://circleci.com/)
  * Generated projects will now create the following hidden folder and file:
    * ```.circleci/config.yml```
    * You can see it on a Mac/Linux with: ```ls -la```
* The badge and link generated in the README now point to your project on CircleCI
* You are now prompted for your CircleCI username instead of your Travis CI username
* A ```.travis.yml``` file is no longer generated
* You can track my bug report here:  
  * https://github.com/travis-ci/travis-ci/issues/8265
* When resolved I'll restore support for Travis CI


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

### Version 0.0.44

* #10 install eslint-config-xo-space locally for generator
* #9 updated doc re installing react for testing
* #8 removed test call at the end of the installation script

### Version 0.0.43

* nsp now installed locally

### Version 0.0.42

* Fixes and updates
* #6 - Updated .circleci/config.yml template to install react
* #5 - react is now just a peer dependency
* #4 - added eslint as a dev dependency
* #3 - updated babel plugins in .babelrc and related packages in package.json

### Version 0.0.41

* Removed duplicate dependencies from generated package.json file
* Removed unused entries and code from generated Gruntfile.js

### Version 0.0.40

* Updated doc regarding Travis CI

### Version 0.0.39

* Added test coverage calls to generated .circleci/config.yml

### Version 0.0.38

* Added generated test coverage support

### Version 0.0.37

* Added react-test-renderer ^15.6.1 to generated package.json to remove test warnings.

### Version 0.0.36

* Updated dependency versions in generated package.json

### Version 0.0.35

* Added CircleCI support
* Replaced TravisCI badge link in generated README with CircleCI link
* Added link to How-To article in this doc.

### Version 0.0.34

* Upgraded local npm to 5.0.3 to resolve readme not being included in published package

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

