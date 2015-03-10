export default ngModule => {
  ngModule.directive('kcdGreeting', kcdGreeting);

  function kcdGreeting() {
    return {
      restrict: 'E',
      scope: {
        individual: '='
      },
      controllerAs: 'vm',
      bindToController: true,
      controller: angular.noop
    };
  }
};
