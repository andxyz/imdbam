"use strict";

console.log('imdbam popupjs is doing this');

;(function ($, _) {

  var App = App || {};
  window.App = App; // debug

  App.init = function () {

    App.setupTheLook();

    App.preloadSavedData();

    App.setupOnClicks();
  };

  App.setupTheLook = function () {

    $("[name='js-advanced-option-switch']").bootstrapSwitch();

    $("[name='js-kevin-bacon-mode']").bootstrapSwitch();
    $("[name='js-mark-little-mode']").bootstrapSwitch();
    $("[name='js-jeff-goldbloom-mode']").bootstrapSwitch();
  };

  App.preloadSavedData = function () {

    chrome.storage.local.get(['actorName', 'actorCharacter', 'castlistOrdinal'], function (loadedItems) {
      $('.js-actor-name').val(loadedItems.actorName);
      $('.js-actor-character').val(loadedItems.actorCharacter);
      $('.js-castlist-ordinal').val(loadedItems.castlistOrdinal);
    });
  };

  App.setupOnClicks = function () {

    $('.js-save').on('click', function () {
      console.log('imdbam begin saving');
      App.prepareToSaveChanges();
      console.log('imdbam finished saving');
    });

    $("[name='js-advanced-option-switch']").on('switchChange.bootstrapSwitch', function (event, state) {
      if (state) {
        $('.js-advanced-options-section').stop().show();
      } else {
        $('.js-advanced-options-section').stop().hide();
      }
    });
  };

  App.prepareToSaveChanges = function () {

    // Get a value saved in a form.

    // var movieTitle = $('.js-movie-title').val();

    App.actorName = $('.js-actor-name').val();
    App.actorCharacter = $('.js-actor-character').val();
    App.castlistOrdinal = $('.js-castlist-ordinal').find(":selected").val();
    App.actorImgSrc = "";

    // get a small picture of the actor from google using wikipedia as the source
    $.ajax({
      url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + App.actorName + '+headshot+"wikipedia.com&imgsz=small',
      data: "",
      success: function success(data) {

        console.log('imdbam data');
        console.log(data);
        console.log('imdbam data...url');

        App.actorImgSrc = data.responseData.results[0].unescapedUrl;
        console.log(App.actorImgSrc);

        App.saveChanges();
      },
      error: App.saveChanges,
      dataType: 'json'
    });
    console.log('imdbam saving image named');
    console.log(App.actorImgSrc);
  };

  App.saveChanges = function () {

    // Save it using the Chrome extension storage API.
    // see https://developer.chrome.com/extensions/storage
    chrome.storage.local.set({
      'actorName': App.actorName,
      'actorCharacter': App.actorCharacter,
      'castlistOrdinal': App.castlistOrdinal,
      'actorImgSrc': App.actorImgSrc
    }, function () {
      console.log('imdbam settings saved');
      // if (!runtime.lastError) {
      //   console.log(runtime.lastError);
      // }
    });
  };

  $(document).ready(function () {

    App.init();
  });
})(jQuery, _);
//# sourceMappingURL=popup.js.map
