'use strict';

angular.module('EskuraApp')
  .service('FeedList', ['$rootScope', 'FeedLoader', function ($rootScope, FeedLoader) {
    var feeds = [];
    this.get = function () {
      var feedSources = [
        {title: 'Larrabetzutik', url: 'http://larrabetzutik.org/feed/'},
        {title: 'Hori Bai', url: 'http://horibai.org/feed/rss/'},
        {title: 'iPtx', url: 'http://www.larrabetzu.org/gaztelumendi/?feed=rss2'},
        {title: 'Larrabetzuko Eskola', url: 'http://www.larrabetzukoeskola.org/feed/'},
        {title: 'Larrabetzuko Udala', url: 'http://www.larrabetzuko-udala.com/_layouts/feed.aspx?xsl=1&web=%2Feu-ES&page=80690b0d-69fd-4e54-901d-309ace29e156&wp=e062f3df-e82b-4a0f-9365-2aefefa7a8a5'},
        {title: 'Larrabetzu Zero Zabor', url: 'http://larrabetzuzerozabor.org/index.php/eu/bloga?format=feed&type=rss'}
      ];
      
      if (feeds.length === 0) {
        for (var i = 0; i<feedSources.length; i++) {
          FeedLoader.fetch( { q: feedSources[i].url, num: 5 }, {}, function (data) {
            var feed = data.responseData.feed;
            // zero zabor eta udalaren titulu aldaketa
            if (feed.title === 'Bloga') {
              feed.title = 'Larrabetzu Zero Zabor'
            };
            if (feed.title === 'Suscripciones') {
              feed.title = 'Larrabetzuko Udala'
            };
            
            feeds.push(feed);
          });
        }
      }
      return feeds;
    };
  }]);