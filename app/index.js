
const angular = require('angular');

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

require('./directives')(ngModule);
