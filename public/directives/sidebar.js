(function() {
  'use strict';

  angular
    .module('app')
    .directive('mlSidebar', mlSidebar);

  function mlSidebar() {
    return {
      restrict: 'E',
      templateUrl: 'views/admin/tpl/demo/partials/sidebar.html',
      replace: true
    };
  }

})();
