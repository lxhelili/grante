angular.module('app')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
    // $urlRouterProvider.otherwise("/");
    //$locationProvider.html5Mode(true);
    // States
    
    $stateProvider
      .state('client', {
        abstract: true,
        views: {
          client: { 
            templateUrl: 'views/client/index/index.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'  
          }
        }
      })
      .state('client.ballina', {
        url: '/ballina',
        views: {
          'content@client': { 
            templateUrl: 'views/client/ballina/ballina.html',
            controller: 'BallinaCtrl',
            controllerAs: 'vm' 
          }
        }
      })
      .state('client.benifitet', {
        url: '/benifitet',
        views: {
          'content@client': { 
            templateUrl: 'views/client/benifitet/benifitet.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm' 
          }
        }
      })
      .state('client.perdorimi', {
        url: '/perdorimi',
        views: {
          'content@client': { 
            templateUrl: 'views/client/perdorimi/perdorimi.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm' 
          }
        }
      })
      .state('client.kontakt', {
        url: '/kontakt',
        views: {
          'content@client': { 
            templateUrl: 'views/client/kontakt/kontakt.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm' 
          }
        }
      })
      .state('client.perfituesit', {
        url: '/perfituesit',
        views: {
          'content@client': { 
            templateUrl: 'views/client/perfituesit/perfituesit.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm' 
          }
        }
      })
      .state('client.aplikacioni', {
        url: '/aplikacioni/:aplikacionId',
        views: {
          'content@client': { 
            templateUrl: 'views/client/aplikacioni/aplikacioni.html',
            controller: 'AplikacioniCtrl',
            controllerAs: 'vm' 
          }
        }
      })
      .state('admin', {
       abstract: true,
        views: {
          admin: { 
            templateUrl: 'views/admin/tpl/demo/app.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'  
          }
        },
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('admin.dashboard', {
       url: '/admin',
        views: {
          'dashboard@admin': { 
            templateUrl: 'views/admin/tpl/demo/dashboard.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'  
          }
        }
      })
      .state('admin.grantet', {
       url: '/admin/grantet',
        views: {
          'dashboard@admin': { 
            templateUrl: 'views/admin/pages/grantet/grantet.html',
            controller: 'GrantetAdminCtrl',
            controllerAs: 'vm'  
          }
        }
      })
      .state('admin.grante', {
       url: '/admin/grante',
        views: {
          'dashboard@admin': { 
            templateUrl: 'views/new-grante/new-grante.html',
            controller: 'ShtoGranteCtrl',
            controllerAs: 'vm'  
          }
        }
      })
       .state('admin.drejtorit', {
       url: '/admin/drejtorit',
        views: {
          'dashboard@admin': { 
            templateUrl: 'views/admin/pages/drejtorit/drejtorit.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'  
          }
        }
      })
      .state('admin.aplikantet', {
       url: '/admin/aplikantet',
        views: {
          'dashboard@admin': { 
            templateUrl: 'views/admin/pages/aplikantet/aplikantet.html',
            controller: 'AplikantetCtrl',
            controllerAs: 'vm'  
          }
        }
      })
      .state('admin.fituesit', {
      url: '/admin/fituesit',
        views: {
          'dashboard@admin': { 
            templateUrl: 'views/admin/pages/fituesit/fituesit.html',
            controller: 'TablesDataController',
            controllerAs: 'vm'  
          }
        }
      })
      .state('login', {
        url: "/login",
        views: {
          auth: { 
            templateUrl: "views/login/login.html",
            controller: 'LoginCtrl',
            controllerAs: 'vm' 
          }
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('register', {
        url: "/register",
        views: {
          auth: { 
            templateUrl: "views/register/register.html",
            controller: 'RegisterCtrl',
            controllerAs: 'vm' 
          }
        },
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      }) 
      $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');
        $state.go('client.ballina');
      })

      $authProvider.httpInterceptor = function() { return true; };
      $authProvider.withCredentials = false;
      $authProvider.tokenRoot = null;
      $authProvider.baseUrl = '/api';
      $authProvider.loginUrl = '/login';
      $authProvider.signupUrl = '/register';
      $authProvider.unlinkUrl = '/auth/unlink/';
      $authProvider.tokenName = 'token';
      $authProvider.tokenPrefix = 'grante';
      $authProvider.authHeader = 'Authorization';
      $authProvider.authToken = 'Bearer';
      $authProvider.storageType = 'localStorage';

      function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.reject();
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }

      function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.resolve();
        } else {
          $location.path('/login');
        }
        return deferred.promise;
      }
})
