export default ngModule => {
  ngModule.directive('kcdHello', () => {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'directives/kcd-hello.html',
      controllerAs: 'vm',
      controller: function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
      }
    };
  });
};
