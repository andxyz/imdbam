'use strict';

var _jquery = require('./vendor/jquery.min');

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = require('./vendor/underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('imdbam booting');

;(function ($, _) {
  'use strict'
  // set global app
  ;
  var App = App || {};
  window.App = App; // debug

  App.init = function () {

    console.log('imdbam started');

    App.deleteStuff();
    App.saveLongLivedInfo();

    window.setTimeout(function () {
      App.changeThings();
      // App.kevinBaconTheMovie();
    }, 1000);

    console.log('imdbam finished');
  };

  App.saveLongLivedInfo = function () {
    App.castList = $('table.cast_list');
    App.movieTitle = $('h1.header span');
    App.noPictureSrc = 'http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB379389446_.png';
    // var junk = castList.find('tr:nth-child('+actorOrdinal+')');
  };

  App.changeThings = function () {
    // predefinedActors.each(function() {});

    //change title
    App.movieTitle.text('Titanic: The story about this ship we found');

    //change actors
    App.replaceActor(2, 'My Ex 3', 'Raptor');

    App.replaceActor(7, 'Kevin Bacon', '"Billy" the Great White Shark');

    App.replaceActor(4, 'Peters Stevens', 'The name is Bond... James. Blong\'d');

    App.replaceActor(10, 'Space Cowboy', 'Mary "jane" Jane');

    App.replaceActor(11, 'Yipyup', 'Yip yup yip yip yup yip yup yip yup yip yup yup');
  };

  App.kevinBaconTheMovie = function () {
    // predefinedActors.each(function() {});

    //change title
    App.movieTitle.text('Kevin Bacon: the movie');

    //change actors
    _.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], function (ordinal) {
      App.replaceActor(ordinal, 'Kevin Bacon', 'Kevin Bacon');
    });
  };

  App.replaceActor = function (actorOrdinal, realname, rolename) {
    var actor = App.castList.find('tr:nth-child(' + (actorOrdinal + 1) + ')');

    var pic = actor.find('td:nth-child(1) img');
    pic.attr('src', App.noPictureSrc);

    var realnameEle = actor.find('td:nth-child(2) a span');
    realnameEle.text(realname);

    var rolenameEle = actor.find('td.character a');
    rolenameEle.text(rolename);
  };

  App.deleteStuff = function () {
    $('.watchbar2').remove();
    $('#titleAwardsRanks').remove();
    $('#titleMediaStrip').remove();
    $('#titleRecs').remove();
  };

  $(document).ready(function () {
    App.init();
  });
})(_jquery2.default, _underscore2.default);

//# sourceMappingURL=imdbam.js.map
//# sourceMappingURL=imdbam.js.map
