'use strict';

console.log('imdbam popupjs is doing this');

$('js-save').on('click', function() {
  console.log('imdbam begin saving');
  saveChanges();
  console.log('imdbam finished saving');
});

function saveChanges() {
  // Get a value saved in a form.

  var movieTitle = $('.js-movie-title').value;
  var actorName = $('.js-actor-name').value;
  var actorCharacter = $('.js-actor-character').value;
  var castlistOrdinal = $('.js-castlist-ordinal').value;

  // Save it using the Chrome extension storage API.
  // see https://developer.chrome.com/extensions/storage
  chrome.storage.local.set(
    {
      'movieTitle': movieTitle,
      'actorName': actorName,
      'actorCharacter': actorCharacter,
      'castlistOrdinal': castlistOrdinal
    },
    function() {
      console.log('imdbam settings saved');
      if (!runtime.lastError) {
        console.log(runtime.lastError);
      }
    }
  );
}
