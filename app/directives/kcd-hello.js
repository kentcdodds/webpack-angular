module.exports = function(ngModule) {
  ngModule.directive('kcdHello', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'directives/kcd-hello.html',
      controllerAs: 'vm',
      controller: function() {
        var vm = this;

        vm.greeting = 'Hello Webpack';
      }
    };
  });
};
