(function () {
    'use strict';
 
    angular
        .module('app')
        .service('multipartForm', multipartForm);

    multipartForm.$inject = ['$http', '$q', '$auth'];

    function multipartForm($http, $q, $auth) {
        this.post = function(uploadUrl, data){
            var fd = new FormData();
            for(var key in data)
                fd.append(key, data[key]);
            var deferred = $q.defer();
            $http.post(uploadUrl, fd, {
                transformRequest: angular.indentity,
                headers: { 'Content-Type': undefined}
            })
            .success(deferred.resolve)
            .error(deferred.resolve);
            return deferred.promise;
        }
    }

})();