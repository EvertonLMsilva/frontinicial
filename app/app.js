'use strict';

angular.module('europlusApp', [
    'ngRoute',
    'ngDialog',
    "europlusApp.pedidos"
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/pedidos'});
}]);
