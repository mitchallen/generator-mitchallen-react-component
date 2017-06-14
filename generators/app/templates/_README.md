<%= fullPackageName %>
==
<%= reactClassName %> React component
--

<p align="left">
  <a href="https://travis-ci.org/<%= travisUser %>/<%= packageName %>">
    <img src="https://img.shields.io/travis/<%= travisUser %>/<%= packageName %>.svg?style=flat-square" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/<%= codecovUser %>/<%= packageName %>">
    <img src="https://codecov.io/gh/<%= codecovUser %>/<%= packageName %>/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/<%= fullPackageName %>">
    <img src="http://img.shields.io/npm/dt/<%= fullPackageName %>.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/<%= fullPackageName %>">
    <img src="http://img.shields.io/npm/v/<%= fullPackageName %>.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/<%= fullPackageName %>">
    <img src="https://img.shields.io/github/license/<%= githubUser %>/<%= packageName %>.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install <%= fullPackageName %> --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import <%= reactClassName %> from '<%= fullPackageName %>';
```

__NOTE:__ <%= reactClassName %> must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<<%= reactClassName %> />
```


* * *

## Testing

### Install Test Framework

To run the tests you will need to globally install __jest__ (http://facebook.github.io/jest/).

__Note:__ You may need to preface ```npm install -g``` commands with ```sudo```.

```bash
npm install -g jest jest-cli
```

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app <%= packageName %>-test
$ cd <%= packageName %>-test
$ npm link <%= fullPackageName %>
```

### Modify src/App.js

1: Add this line near the top:

```
import <%= reactClassName %> from '<%= fullPackageName %>';
```

__NOTE:__ <%= reactClassName %> must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<<%= reactClassName %> />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/<%= bitbucketUser %>/<%= packageName %>.git](https://bitbucket.org/<%= bitbucketUser %>/<%= packageName %>.git)
* [github.com/<%= githubUser %>/<%= packageName %>.git](https://github.com/<%= githubUser %>/<%= packageName %>.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *