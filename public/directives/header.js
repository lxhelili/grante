(function() {
  'use strict';

  angular
    .module('app')
    .directive('mlHeader', mlHeader);

  function mlHeader() {
    return {
      restrict: 'E',
      templateUrl: 'views/admin/tpl/demo/partials/header.html',
      replace: true
    };
  }

})();
