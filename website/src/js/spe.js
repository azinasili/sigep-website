'use strict';

// Function to start Google Maps
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(39.958901, -75.191096),
    zoom: 18,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// Append script tag to body
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initialize';
  document.body.appendChild(script);
}

// Load the script and map
window.onload = loadScript;
google.maps.event.addDomListener(window, 'load', initialize);
