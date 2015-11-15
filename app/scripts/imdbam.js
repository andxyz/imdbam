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
      // App.changeThings();
      App.kevinBaconTheMovie();
      App.castList.show();
    }, 1000);

    console.log('imdbam finished');

  };

  App.hideStuff = function() {

    App.castList.hide();

  };

  App.changeThings = function() {
    // _.each(predefinedActors, function(item, index) { dostuff(); });
    // change title
    // App.movieTitle.text('Titanic: The story about this ship we found');

    // change actors
    App.replaceActor(App.castlistOrdinal, App.actorName, App.actorCharacter);
  };

  App.kevinBaconTheMovie = function() {
    // predefinedActors.each(function() {});

    //change title
    App.movieTitle.text('Kevin Bacon: the movie');

    //change actors
    _.each([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], function(ordinal) {
        App.replaceActor(ordinal, 'Kevin Bacon', 'Kevin Bacon');
    });
  };

  App.replaceActor = function(actorOrdinal, realname, rolename) {
    var actualOrdinal = ( parseInt(actorOrdinal,10) + 1 );
    console.log('imdbam placing actor at:');
    console.log(actualOrdinal);
    var actor = App.castList.find('tr:nth-child(' + actualOrdinal + ')');

    var pic = actor.find('td:nth-child(1) img');
    pic.attr('src', App.noPictureSrc);

    var realnameEle = actor.find('td:nth-child(2) a span');
    realnameEle.text(realname);

    var rolenameEle = actor.find('td.character a');
    rolenameEle.text(rolename);
  };

  App.saveLongLivedInfo = function() {
    App.castList = $('table.cast_list');
    App.movieTitle = $('h1.header span');
    App.noPictureSrc = 'http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB379389446_.png';
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
        'castlistOrdinal'
      ],
      function(loadedItems) {
        console.log('imdbam loaded the following data:');
        console.log(loadedItems);
        App.actorName = loadedItems.actorName
        App.actorCharacter = loadedItems.actorCharacter
        App.castlistOrdinal = loadedItems.castlistOrdinal
      }
    );
  };

  $(document).ready(function(){
      App.init();
  });

})(jQuery, _);
