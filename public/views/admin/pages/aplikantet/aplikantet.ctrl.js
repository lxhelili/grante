(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('AplikantetCtrl', AplikantetCtrl);
 
    AplikantetCtrl.$inject = ['$scope', '$http', '$confirm', 'toaster'];
    function AplikantetCtrl($scope, $http, $confirm, toaster) {

        var vm = this;
       	
       	//  vm.fshiGrante = function(granteId) {
            
        //     $confirm({text: 'A jeni të sigurt që dëshironi ta fshini', title: 'Delete it', ok: 'Yes', cancel: 'No'})
	       //  .then(function() {
	       //    $http({
        //             method: 'DELETE',
        //             url: '/api/grante/'+ granteId
        //             }).success(function(data, status, headers, config) {
        //                 getGrants();
        //                 toaster.pop({
        //                     type: 'success',
        //                     title: 'Sukses!',
        //                     body: 'Granti juaj u fshi me sukses',
        //                     timeout: 3000
        //                 });
        //             }).error(function(data, status, headers, config) {
        //                 console.log('Deleted Not Succesfuly')
        //             });
	       //  });        
        // } 


       	getAplikantet();

        function getAplikantet(){
            $http({
                method: 'GET',
                url: '/api/aplikantet'
                }).success(function(data, status, headers, config) {
                     vm.aplikantetList = data;
                     console.log(data)
                }).error(function(data, status, headers, config) {
                
            });
        }

    }

})();
