(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('AplikacioniCtrl', AplikacioniCtrl);
 
    AplikacioniCtrl.$inject = ['$scope', '$http', '$stateParams', '$state', 'toaster', '$timeout', 'multipartForm'];
    function AplikacioniCtrl($scope, $http, $stateParams, $state, toaster, $timeout, multipartForm) {
        var vm = this;

        var aplicationId = $stateParams.aplikacionId;
        getGrants();

        function getGrants(){
            $http({
                method: 'GET',
                url: '/api/applications/' + aplicationId
                }).success(function(data, status, headers, config) {
                     vm.grantsList = data;
                     console.log(data)
                }).error(function(data, status, headers, config) {
                
              });
          }

       
        vm.newAplikacion = function(aplikacion){
            var uploadUrl = '/api/applications/' + aplicationId;
            multipartForm.post(uploadUrl, aplikacion)
            .then(function(response) {
                toaster.pop({
                    type: 'success',
                    title: 'Sukses!',
                    body: 'Granti juaj u shtua me sukses',
                    timeout: 3000
                });
                $state.go('client.ballina');

            })
            .catch(function(status, data) {
                console.log('Error', response.status, response.data);
            })
        }



    }
})();