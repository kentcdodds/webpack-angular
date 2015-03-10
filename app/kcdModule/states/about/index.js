module.exports = ngModule => {
  ngModule.config(function($stateProvider) {
    $stateProvider.state('about', {
      url: '/about',
      template: require('./index.html'),
      controller: require('./controller.js'),
      controllerAs: 'vm'
    });
  });
};
