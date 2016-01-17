import angular from 'angular';
import registerDirectives from './directives';
if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

registerDirectives(ngModule);
