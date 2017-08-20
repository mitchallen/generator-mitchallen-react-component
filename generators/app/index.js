'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  // Reference: http://yeoman.io/authoring/user-interactions.html
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This method adds support for a `--notest` flag
    this.option('notest'); // Results in: this.options.notest
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-mitchallen\n-react-component') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'scoped',
      message: 'Will this project be published under an npm scope?',
      default: false
    },
    {
      when: function (response) {
        return response.scoped;
      },
      type: 'input',
      name: 'scopeName',
      message: 'npm scope name:',
      store: true
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'npm package name:',
      default: 'my-component'
    },
    {
      type: 'input',
      name: 'reactClassName',
      message: 'react component class name (Capitalize, no dashes):',
      default: 'MyComponent'
    },
    {
      type: 'input',
      name: 'bitbucketUser',
      message: 'bitbucket.org user name:',
      store: true
    },
    {
      type: 'input',
      name: 'githubUser',
      message: 'github.com user name:',
      store: true
    },
    // {
    //   type: 'input',
    //   name: 'travisUser',
    //   message: 'travis-ci.org user name',
    //   store: true
    // },
    {
      type: 'input',
      name: 'cirlcleCiUser',
      message: 'circleci.com user name:',
      store: true
    },
    {
      type: 'input',
      name: 'codecovUser',
      message: 'codecov.io user name:',
      store: true
    },
    {
      type: 'input',
      name: 'npmAuthor',
      message: 'npm author name:',
      store: true
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    }).then(() => {
      const pkg = this.props.packageName;
      if (this.props.scoped) {
        this.log('==> scope: ', this.props.scopeName);
      }
      this.log('==> package name: ', this.props.scoped ? '@' + this.props.scopeName + '/' + pkg : pkg);
      this.log('==> react class name: ', this.props.reactClassName);
      this.log('==> npm author: ', this.props.npmAuthor);
    });
  }

  writing() {
    // File: package.json
    const pkg = this.props.packageName;

    const data = {
      packageName: pkg,
      fullPackageName:
        this.props.scoped ? '@' + this.props.scopeName + '/' + pkg : pkg,
      reactClassName: this.props.reactClassName,
      npmAuthor: this.props.npmAuthor,
      bitbucketUser: this.props.bitbucketUser,
      githubUser: this.props.githubUser,
      travisUser: this.props.travisUser,
      cirlcleCiUser: this.props.cirlcleCiUser,
      codecovUser: this.props.codecovUser,
      currentYear: new Date().getFullYear()
    };

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      data
    );

    // File: README.md

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      data
    );

    // File: Gruntfile.js

    this.fs.copy(
      this.templatePath('_Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );

    // File: .babelrc

    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );

    // File: .npmignore

    this.fs.copy(
      this.templatePath('_npmignore'),
      this.destinationPath('.npmignore')
    );

    // File: .travis.yml

    // this.fs.copy(
    //   this.templatePath('_travis.yml'),
    //   this.destinationPath('.travis.yml')
    // );

    this.fs.copyTpl(
      this.templatePath('_cirlceci.config.yml'),
      this.destinationPath('.circleci/config.yml'),
      data
    );

    // File: webpack.config.js

    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    // File: LICENSE

    this.fs.copyTpl(
      this.templatePath('_LICENSE'),
      this.destinationPath('LICENSE'),
      data
    );

    // File: index.js

    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath('src/index.js'),
      data
    );

    // File: test/Smoke.spec.js

    this.fs.copyTpl(
      this.templatePath('_test-smoke.spec.js'),
      this.destinationPath('test/Smoke.spec.js'),
      data
    );

     // File: test/dom.js

    this.fs.copy(
      this.templatePath('_test-dom.js'),
      this.destinationPath('test/dom.js')
    );

    // File: test/helpers.js

    this.fs.copy(
      this.templatePath('_test-helpers.js'),
      this.destinationPath('test/helpers.js')
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    if (this.options.notest === undefined) {
      // Run tests after generation: yo mitchallen-react-component
      // Don't run tests: yo mitchallen-react-component --notest
      // Have to skip with flag because this causes issues for running tests on generator
      // Running tests will trigger build and webpack first
      this.spawnCommand('npm', ['test']);
    }
  }
};
