'use strict';

angular.module('EskuraApp', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'views/main.html'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .when('/albisteak', {
        templateUrl: 'views/albisteak.html',
        controller: 'AlbisteakCtrl'
      })
      .when('/ekintza/:pk', {
        templateUrl: 'views/ekintza.html',
        controller: 'EkintzaCtrl'
      })
      .when('/elkarteak', {
        templateUrl: 'views/elkarteak.html',
        controller: 'ElkarteakCtrl'
      })
      .when('/nor-gara', {
        templateUrl: 'views/nor-gara.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);