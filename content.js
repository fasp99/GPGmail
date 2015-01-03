
var j = document.createElement('script');
j.src = chrome.extension.getURL('lib/jquery-2.1.1.min.js');
(document.head || document.documentElement).appendChild(j);

var g = document.createElement('script');
g.src = chrome.extension.getURL('lib/gmail.js');
(document.head || document.documentElement).appendChild(g);

var s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
(document.head || document.documentElement).appendChild(s);
