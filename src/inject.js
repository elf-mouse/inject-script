// place your script Absolute URL for "{yourScript.js}"
(function(window, document, undefined) {
  var script = document.createElement('script');
  script.setAttribute('charset', 'utf-8');
  script.src = '{yourScript.js}?' + new Date().getTime();
  document.body.appendChild(script);
})(window, document);
