'use strict';

console.log('imdbam popupjs is doing this');

;(function($,_){

  loadSavedData();

  $('.js-save').on('click', function() {
    console.log('imdbam begin saving');
    saveChanges();
    console.log('imdbam finished saving');
  });

  function loadSavedData() {
    chrome.storage.local.get(
      [
        'actorName',
        'actorCharacter',
        'castlistOrdinal'
      ],
      function(loadedItems) {
        $('.js-actor-name').val(loadedItems.actorName);
        $('.js-actor-character').val(loadedItems.actorCharacter);
        $('.js-castlist-ordinal').val(loadedItems.castlistOrdinal);
      }
    );
  }

  function saveChanges() {
    // Get a value saved in a form.

    // var movieTitle = $('.js-movie-title').val();
    var actorName = $('.js-actor-name').val();
    var actorCharacter = $('.js-actor-character').val();
    var castlistOrdinal = $('.js-castlist-ordinal').find(":selected").val();

    // Save it using the Chrome extension storage API.
    // see https://developer.chrome.com/extensions/storage
    chrome.storage.local.set(
      {
        'actorName': actorName,
        'actorCharacter': actorCharacter,
        'castlistOrdinal': castlistOrdinal
      },
      function() {
        console.log('imdbam settings saved');
        // if (!runtime.lastError) {
        //   console.log(runtime.lastError);
        // }
      }
    );
  }
})(jQuery, _);
