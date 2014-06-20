'use strict';

angular.module('EskuraApp')
  .service('FeedList', ['$rootScope', 'FeedLoader', function ($rootScope, FeedLoader) {
    var feeds = [];
    this.get = function () {
      var feedSources = [
        {title: 'Larrabetzutik', url: 'http://larrabetzutik.org/feed/'},
        {title: 'Larrabetzuko Udala', url: 'http://www.larrabetzuko-udala.com/_layouts/feed.aspx?xsl=1&web=%2Feu-ES&page=80690b0d-69fd-4e54-901d-309ace29e156&wp=e062f3df-e82b-4a0f-9365-2aefefa7a8a5'},
        {title: 'Larrabetzuko Eskola', url: 'http://www.larrabetzukoeskola.org/feed/'},
        {title: 'Hori Bai', url: 'http://horibai.org/feed/rss/'},
        {title: 'Larrabetzu Zero Zabor', url: 'http://larrabetzuzerozabor.org/index.php/eu/bloga?format=feed&type=rss'},
        {title: 'iPtx', url: 'http://www.larrabetzu.org/gaztelumendi/?feed=rss2'}
      ];
      
      if (feeds.length === 0) {
        for (var i = 0; i<feedSources.length; i++) {
          FeedLoader.fetch( { q: feedSources[i].url, num: 5 }, {}, function (data) {
            var feed = data.responseData.feed;
            
            if (feed.title === 'Larrabetzutik.org') {
              feed.order = 1;
            };
            
            if (feed.title === 'Suscripciones') {
              feed.title = 'Udala';
              feed.order = 2;
            };
            
            if (feed.title === 'Larrabetzuko eskola') {
              feed.order = 3;
            };
            
            if (feed.title === 'HORI BAI gaztetxea') {
              feed.order = 4;
            };
                        
            if (feed.title === 'Bloga') {
              feed.title = 'Zero Zabor';
              feed.order = 5;
            };
            
            if (feed.title === 'gaztelumendi.org') {
              feed.order = 6;
            };
            
            console.info(feed.title + ' ' + feed.order);
            
            feeds.push(feed);
          });
        }
      }
      return feeds;
    };
  }]);