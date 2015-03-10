module.exports = ngModule => {
  ngModule.config(function($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      template: require('./index.html'),
      controller: require('./controller.js'),
      controllerAs: 'vm'
    });
  });
};
