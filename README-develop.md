# Readme for working on the app

#### very important random links

- https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe
- https://developer.mozilla.org/en/docs/Web/HTML/Element/table
- https://developer.mozilla.org/en/docs/Web/HTML/Element/blink
- https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe/related
- https://developers.google.com/speed/libraries/#jquery
- https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
- http://www.imdb.com/title/tt0120338/

#### regarding chrome extensions

- https://www.phase2technology.com/blog/so-you-want-to-build-a-chrome-extension/
- https://developer.chrome.com/extensions/manifest
- https://developer.chrome.com/extensions/content_scripts
- https://developer.chrome.com/extensions/getstarted
- https://developer.chrome.com/apps/storage
- https://developer.chrome.com/extensions/xhr
- http://stackoverflow.com/questions/7128607/chrome-extension-popup-windows-height
- http://stackoverflow.com/questions/4535816/how-to-use-font-face-on-a-chrome-extension-in-a-content-script
- http://stackoverflow.com/questions/13546778/how-to-communicate-between-popup-js-and-background-js-in-chrome-extension

#### jquery and bootstrap

- https://api.jquery.com/remove/
- http://api.jquery.com/on/
- http://getbootstrap.com/css/#grid
- http://getbootstrap.com/css/#forms-example
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
- http://stackoverflow.com/questions/7399640/jquery-select-option-in-select-box
- https://api.jquery.com/jquery.get/
- http://stackoverflow.com/questions/941206/jquery-add-image-inside-of-div-tag

### manifest.js hints

just use `grunt build` for now

```shell
grunt debug
grunt watch
grunt build
```


```json
"background": {
    "scripts": [
      "scripts/chromereload.js",
      "scripts/background.js"
    ]
  },
```
