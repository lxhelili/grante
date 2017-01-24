(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('ShtoGranteCtrl', ShtoGranteCtrl);
 
    ShtoGranteCtrl.$inject = ['$scope', '$http', '$auth', '$state', '$stateParams', 'multipartForm', '$filter', 'toaster'];
    function ShtoGranteCtrl($scope, $http, $auth, $state, $stateParams, multipartForm, $filter, toaster) {
        var vm = this;
        
        // Trigger manual input event to hide label
	    $scope.onPikadaySelect = function onPikadaySelect(pikaday, date) {
	      var event = new Event('input');

	      pikaday._o.field.dispatchEvent(event);
	    };

	    $scope.drejtorit = [
	      { emri: 'Drejtoria e Arsimit'},
	      { emri: 'Drejtoria e Shendetesis'},
	      { emri: 'Drejtoria e Kultures'},
	      { emri: 'Drejtoria e Sportit'}
	    ];
	       

        vm.newGrante = function(product){
            var uploadUrl = '/api/grants';
            multipartForm.post(uploadUrl, product)
            .then(function(response) {
                toaster.pop({
                    type: 'success',
                    title: 'Sukses!',
                    body: 'Granti juaj u shtua me sukses',
                    timeout: 3000
                });
                $state.go('admin.grantet');

            })
            .catch(function(status, data) {
                console.log('Error', response.status, response.data);
            })
        }

        // if($auth.getPayload().role === 'lab_admin') {
        //     vm.labId = $auth.getPayload().lab_id;
        // }

        // getCategories();

        // function getCategories(){
        //     $http({
        //         method: 'GET',
        //         url: baseUrl + '/lab/' + vm.labId + '/categories'
        //         }).success(function(data, status, headers, config) {
        //             console.log(data.categories)
        //              vm.categoryList = data.categories;
        //         }).error(function(data, status, headers, config) {
        //         // This is called when the response
        //         // comes back with an error status
        //     });
        // }

    }
})();