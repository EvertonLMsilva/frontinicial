'use strict';

angular.module('europlusApp', [
  'ngRoute',
  "europlusApp.pedidos"
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pedidos'});
}]);
