(function() {
  'use strict';
  angular.module('kcdModule').directive('kcdGreeting', kcdGreeting);

  function kcdGreeting() {
    return {
      restrict: 'E',
      templateUrl: 'kcdModule/common/directives/kcd-greeting.html',
      scope: {
        greeted: '@'
      },
      controllerAs: 'vm',
      bindToController: true,
      controller: angular.noop
    };
  }
})();
