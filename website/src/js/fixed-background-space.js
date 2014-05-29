'use strict';

// Function to apply the height of footer to margin-bottom on main
function marginBottom() {
  // Get the height of footer
  var footerHeight = document.getElementById('footer').offsetHeight;

  // Apply margin-bottom
  document.getElementById('main').setAttribute('style', 'margin-bottom: ' + footerHeight + 'px');
}

// Call function on load
window.onload   = marginBottom();

// Add a resize event to marginBottom function
window.onresize = marginBottom();
