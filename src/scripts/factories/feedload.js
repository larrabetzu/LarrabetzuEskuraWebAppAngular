'use strict';

angular.module('EskuraApp')
  .factory('FeedLoader', ['$resource', function ($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
      fetch: { method: 'JSONP', params : { v: '1.0', callback: 'JSON_CALLBACK' } }
    });
  }]);