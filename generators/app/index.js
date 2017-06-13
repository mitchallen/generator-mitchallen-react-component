'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the prime ' + chalk.red('generator-meetch') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'scoped',
      message: 'Will this project be published under an npm scope?',
      default: 'false'
    },
    {
      when: function (response) {
        return response.scoped;
      },
      type: 'input',
      name: 'scopeName',
      message: 'npm scope name',
      store: true
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'npm package name'
    },
    {
      type: 'input',
      name: 'reactClassName',
      message: 'react component class name'
    },
    {
      type: 'input',
      name: 'bitbucketUser',
      message: 'bitbucket user name',
      store: true
    },
    {
      type: 'input',
      name: 'githubUser',
      message: 'github user name',
      store: true
    },
    {
      type: 'input',
      name: 'npmAuthor',
      message: 'npm author name',
      store: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }).then(() => {
      this.log('==> scoped: ', this.props.scoped);
      this.log('==> scope: ', this.props.scopeName);
      this.log('==> package name: ', this.props.packageName);
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
      githubUser: this.props.githubUser
    };

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      data
    );
  }

  install() {
    this.installDependencies();
  }
};
