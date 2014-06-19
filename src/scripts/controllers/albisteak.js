'use strict';

angular.module('EskuraApp')
  .controller('AlbisteakCtrl', ['$scope', 'FeedList', function ($scope, FeedList) {
    $scope.feeds = FeedList.get();
  }]);