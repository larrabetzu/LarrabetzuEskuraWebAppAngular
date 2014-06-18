'use strict';

angular.module('EskuraApp')
  .controller('AgendaCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://larrabetzu.net/wsEkintza')
      .success(function (data) {
        $scope.ekintzak = data;
      });
  }]);