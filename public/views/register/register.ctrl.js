(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('RegisterCtrl', RegisterCtrl);
 
    RegisterCtrl.$inject = ['$auth', '$scope', '$location', '$state'];
    function RegisterCtrl($auth, $scope, $location, $state) {
        var vm = this;
        
        
		vm.handleRegisterBtnClick = function() {
	      $auth.signup(vm.registerForm)
	        .then(function(response) {
	          $auth.setToken(response);
	          $location.path('/');
	          console.log('You have successfully created a new account and have been signed-in');
	        })
	        .catch(function(response) {
	          console.log(response.data.message);
	        });
	    };
    }
})();