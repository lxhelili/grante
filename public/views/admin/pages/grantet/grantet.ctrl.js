(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('GrantetAdminCtrl', GrantetAdminCtrl);
 
    GrantetAdminCtrl.$inject = ['$scope', '$http', '$confirm', 'toaster'];
    function GrantetAdminCtrl($scope, $http, $confirm, toaster) {

        var vm = this;
       	
       	 vm.fshiGrante = function(granteId) {
            
            $confirm({text: 'A jeni të sigurt që dëshironi ta fshini', title: 'Delete it', ok: 'Yes', cancel: 'No'})
	        .then(function() {
	          $http({
                    method: 'DELETE',
                    url: '/api/grante/'+ granteId
                    }).success(function(data, status, headers, config) {
                        getGrants();
                        toaster.pop({
                            type: 'success',
                            title: 'Sukses!',
                            body: 'Granti juaj u fshi me sukses',
                            timeout: 3000
                        });
                    }).error(function(data, status, headers, config) {
                        console.log('Deleted Not Succesfuly')
                    });
	        });        
        } 


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
