const moduleName = 'kcdModule';

const ngModule = angular.module(moduleName, [
  require('angular-ui-router'),
  require('angular-formly'),
  require('angular-aria'),
  require('angular-messages')
]);

require('./states')(ngModule);
require('./common')(ngModule);

ngModule.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

module.exports = moduleName;
