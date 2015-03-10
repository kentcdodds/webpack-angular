angular.module('kcdModule', [
  'ui.router',
  'formly',
  'ngAria',
  'ngMessages',
  'ngAnimate'
], function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'kcdModule/home/HomeCtrl.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });


  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'kcdModule/about/AboutCtrl.html',
    controller: 'AboutCtrl',
    controllerAs: 'vm'
  });

  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'kcdModule/contact/ContactCtrl.html',
    controller: 'ContactCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
});

