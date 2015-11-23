'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

// show my pageAction
// chrome.tabs.onUpdated.addListener(tabId => {
//   chrome.pageAction.show(tabId);
//   console.log('imdbam called pageAction.show() method');
// });

// document.addEventListener('DOMContentLoaded', function () {
//   chrome.contextMenus.create({
//     'title': 'Export Entries',
//     'contexts': ['link'],
//     'onclick': function(info, tab) {
//       exportEntries(info, tab);
//     },
//     'documentUrlPatterns': [
//       '*://imdb.com/title/*',
//       '*://imdb.com/name/*'
//     ]
//   });
// });

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          urlMatches: 'imdb\.com'
        }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
//# sourceMappingURL=background.js.map
