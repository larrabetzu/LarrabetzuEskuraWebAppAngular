'use strict';

angular.module('EskuraApp')
  .controller('EkintzaCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    
    $http.get('http://larrabetzu.net/wsEkintza/', { cache: true })
      .success(function (data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].pk.toString() === $routeParams.pk) {
            $scope.ekintza = data[i];
          }
        }
      });
    
  }]);