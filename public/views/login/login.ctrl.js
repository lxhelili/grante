(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);
 
    LoginCtrl.$inject = ['$auth', '$scope', '$state'];
    function LoginCtrl($auth, $scope, $state) {
        var vm = this;
        
        
		vm.handleLoginBtnClick = function(){
			$auth.login(vm.loginForm)
			.then(function(response) {
			    $auth.setToken(response.data.token);
			    
			    $state.go('admin.dashboard');
			})
			.catch(function(response) {
			    console.log(response)
			});
		}
    }
})();