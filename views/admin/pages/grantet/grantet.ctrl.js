(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('GrantetAdminCtrl', GrantetAdminCtrl);
 
    GrantetAdminCtrl.$inject = ['$scope', '$http'];
    function GrantetAdminCtrl($scope, $http) {

        var vm = this;
       	
       	getGrants();

        function getGrants(){
            $http({
                method: 'GET',
                url: '/api/grants'
                }).success(function(data, status, headers, config) {
                     vm.grantsList = data;
                     console.log(data)
                }).error(function(data, status, headers, config) {
                
              });
          }

    }

})();
