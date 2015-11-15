'use strict';

console.log('imdbhasmyback started');

;(function($){
  'use strict';
  // set global app
  var App = App || {};
  window.App = App; // debug

  App.init = function($) {

    console.log('imdbhasmyback started');
    App.deleteShit();
    window.setTimeout(App.doStuff(), 1000);
    console.log('imdbhasmyback finished');

  };

  App.doStuff = function() {
    var castList = $("table.cast_list");
    var junk = castList.find('tr:nth-child(1)');
    var a1 = castList.find('tr:nth-child(2)');
    var a2 = castList.find('tr:nth-child(3)');

    var pic = a1.find('td:nth-child(1) a span');

    var realname = a1.find('td:nth-child(2) a span');
    realname.text('Kevin Bacon');

    var rolename = a1.find('td.character a');
    rolename.text('"Great White Shark"');
  };

  App.deleteShit = function() {
    $('.watchbar2').remove();
    $('#titleAwardsRanks').remove();
    $('#titleMediaStrip').remove();
    $('#titleRecs').remove();
  };

  jQuery(document).ready(function(){
      App.init();
  });

})(jQuery);

//# sourceMappingURL=imdbhasmyback.js.map
