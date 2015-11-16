console.log('imdbam booting');

;(function($,_){
  'use strict';
  // set global app
  var App = App || {};
  window.App = App; // debug

  App.init = function() {

    console.log('imdbam started');

    App.saveLongLivedInfo(); //do this before hiding things

    App.hideStuff();

    App.loadData();

    App.deleteSomeHtmlJunk();

    window.setTimeout(function() {
      App.changeThings();
      // App.kevinBaconTheMovie();
      App.castList.show();
    }, 1000);

    console.log('imdbam finished');

  };

  App.hideStuff = function() {

    App.castList.hide();

  };

  App.changeThings = function() {

    // change movie title
    // App.movieTitle.text('Titanic: The story about this ship we found');

    // change actors
    App.replaceActor(App.castlistOrdinal, App.actorName, App.actorCharacter, App.actorImgSrc);

  };

  App.replaceActor = function(actorOrdinal, realname, charactername, actorpic) {
    var actualOrdinal = ( parseInt(actorOrdinal,10) + 1 );
    console.log('imdbam placing actor at:');
    console.log(actualOrdinal);
    var actor = App.castList.find('tr:nth-child(' + actualOrdinal + ')');

    // replace picture
    var picTd = actor.find('td:nth-child(1)');
    picTd.find('a').attr('href', "#");
    picTd.find('img').remove();
    if (!actorpic) {
      picTd.prepend('<img height="44" width="32" src="' + App.noPictureSrc + '" />')
      // pic.attr('src', );
    } else {
      picTd.prepend('<img height="44" width="32" src="' + actorpic + '" />');
    }

    // replace realname
    var realnameEle = actor.find('td:nth-child(2) a span');
    realnameEle.text(realname);

    // replace character
    var characternameEle = actor.find('td.character a');
    characternameEle.text(charactername);
  };

  App.kevinBaconTheMovie = function() {
    // predefinedActors.each(function() {});

    //change title
    App.movieTitle.text('Kevin Bacon: the movie');

    //change actors
    _.each([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], function(ordinal) {
        App.replaceActor(ordinal, 'Kevin Bacon', 'Kevin Bacon', App.kevinBaconPicSrc);
    });
  };

  App.saveLongLivedInfo = function() {
    App.castList = $('table.cast_list');
    App.movieTitle = $('h1.header span');
    App.noPictureSrc = 'http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB379389446_.png';
    App.kevinBaconPicSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kevin_Bacon_SDCC_2014.jpg/72px-Kevin_Bacon_SDCC_2014.jpg';

    // var junk = castList.find('tr:nth-child('+actorOrdinal+')');
  };

  App.deleteSomeHtmlJunk = function() {

    $('.watchbar2').remove();
    $('#titleAwardsRanks').remove();
    $('#titleMediaStrip').remove();
    $('#titleRecs').remove();

  };

  App.loadData = function() {
    chrome.storage.local.get(
      [
        'actorName',
        'actorCharacter',
        'castlistOrdinal',
        'actorImgSrc'
      ],
      function(loadedItems) {
        console.log('imdbam loaded the following data:');
        console.log(loadedItems);
        App.actorName = loadedItems.actorName;
        App.actorCharacter = loadedItems.actorCharacter;
        App.castlistOrdinal = loadedItems.castlistOrdinal;
        App.actorImgSrc = loadedItems.actorImgSrc;
      }
    );
  };

  $(document).ready(function(){

    App.init();

  });

})(jQuery, _);
