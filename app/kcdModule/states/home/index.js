module.exports = ngModule => {
  ngModule.config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      template: require('./index.html'),
      controller: require('./controller'),
      controllerAs: 'vm'
    });
  });
};
