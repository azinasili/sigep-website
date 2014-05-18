'use strict';

window.onload=function() {
  var footerHeight = document.getElementById('footer').offsetHeight;
  document.getElementById('main').setAttribute('style', 'margin-bottom: ' + footerHeight + 'px;');
};
