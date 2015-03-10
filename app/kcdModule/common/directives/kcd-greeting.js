export default ngModule => {
  ngModule.directive('kcdGreeting', kcdGreeting);

  require('./kcd-greeting.styl');

  function kcdGreeting() {
    return {
      restrict: 'E',
      template: require('./kcd-greeting.html'),
      scope: {
        greeted: '@'
      },
      controllerAs: 'vm',
      bindToController: true,
      controller: angular.noop
    };
  }
};
