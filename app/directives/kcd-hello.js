export default ngModule => {
  ngModule.directive('kcdHello', kcdHello);

  function kcdHello() {
    return {
      restrict: 'E',
      scope: {},
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',
      bindToController: true,
      controller: function() {
        var vm = this;

        vm.greeting = 'Hello world!';
      }
    };
  }
};
