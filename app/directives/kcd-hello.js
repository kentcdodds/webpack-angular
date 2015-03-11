export default ngModule => {

  if (ON_TEST) {
    require('./kcd-hello.test')(ngModule);
  }

  ngModule.directive('kcdHello', () => {
    require('./kcd-hello.styl');
    return {
      restrict: 'E',
      scope: {},
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
      }
    };
  });
};
