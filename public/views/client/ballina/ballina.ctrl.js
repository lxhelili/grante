(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('BallinaCtrl', BallinaCtrl);
 
    BallinaCtrl.$inject = ['$scope', '$http'];
    function BallinaCtrl($scope, $http) {

        var vm = this;
       	
       	getGrants();

        function getGrants(){
            $http({
                method: 'GET',
                url: '/api/public/grants'
                }).success(function(data, status, headers, config) {
                     vm.grantsList = data;
                     console.log(data)
                }).error(function(data, status, headers, config) {
                
              });
          }

    }

})();
