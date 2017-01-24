(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('BallinaCtrl', BallinaCtrl);
 
    BallinaCtrl.$inject = ['$scope'];
    function BallinaCtrl($scope) {

        var vm = this;
       	
       	vm.grantet = [
       		{
       			drejtoria: 'Kulturës',
       			lloji: 'Menaxhimi i mbeturinave',
       			afati: '04.07.2015 - 14.07.2015',
       			kriteret: 'http://google.com'
       		},
       		{
       			drejtoria: 'Arsimit',
       			lloji: 'Renovimi i shkolles',
       			afati: '04.07.2015 - 14.07.2015',
       			kriteret: 'http://google.com'
       		},
       		{
       			drejtoria: 'Kulturës',
       			lloji: 'Menaxhimi i mbeturinave',
       			afati: '04.07.2015 - 14.07.2015',
       			kriteret: 'http://google.com'
       		},
       		{
       			drejtoria: 'Arsimit',
       			lloji: 'Renovimi i shkolles',
       			afati: '04.07.2015 - 14.07.2015',
       			kriteret: 'http://google.com'
       		},
       		{
       			drejtoria: 'Kulturës',
       			lloji: 'Menaxhimi i mbeturinave',
       			afati: '04.07.2015 - 14.07.2015',
       			kriteret: 'http://google.com'
       		}
       	]

    }

})();