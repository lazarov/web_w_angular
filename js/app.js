var sapp = angular.module('sapp', ['ngRoute']);

  sapp.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'sub/glowna.html'
        })
        .when('/uslugi', {
            templateUrl: 'sub/uslugi.html'
        })
        .when('/kontakt', {
            templateUrl: 'sub/kontakt.html'
        })
        .when('/ofirmie', {
            templateUrl: 'sub/ofirmie.html'
        })
        .when('/portfolio', {
            templateUrl: 'sub/portfolio.html'
        })
        .when('/projekty', {
            templateUrl: 'sub/projekty.html'
        })
        .when('/partnerzy', {
            templateUrl: 'sub/partnerzy.html'
        })
        .otherwise({
          redirectTo: '/'
        });
  });

  sapp.controller('dispController', function($scope) {

  });
