'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-mitchallen-react-component:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'Gruntfile.js',
      'README.md',
      'LICENSE',
      'package.json',
      'webpack.config.js',
      'src/index.js',
      'test/Smoke.spec.js',
      'test/dom.js',
      'test/helpers.js'
    ]);
  });
});
