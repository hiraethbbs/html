/* Common.js */

window.onload = function() {
  var href = document.querySelectorAll('a[rel=external]');
  for (i=0; i<href.length;i++) {
      href[i].setAttribute('target', '_blank');
  }
}
