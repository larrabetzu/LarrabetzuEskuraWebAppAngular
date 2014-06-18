'use strict';

angular.module('EskuraApp')
  .controller('ElkarteakCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://larrabetzu.net/wsAutor')
      .success(function (data) {
        $scope.elkarteak = [];
        data.forEach(function (item) {
          var elkartea = {
            nor: item.fields.nor,
            webgunea: item.fields.webgunea,
            email: item.fields.email
          };
          $scope.elkarteak.push(elkartea);
        });
      });
  }]);