'use strict';

// Enable chromereload by uncommenting this line:
// import './lib/livereload';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
