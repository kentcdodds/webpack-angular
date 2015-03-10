const angular = require('angular');

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [require('./kcdModule')]);
});
