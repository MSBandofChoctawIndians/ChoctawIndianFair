function loadJSAndChangeLocation() {
  // loadJS();
  changeLocation();
}

function loadJS() {
  // Code to load JavaScript file
  var script = document.createElement('script');
  script.src = 'https://tag.simpli.fi/sifitag/b96daa7e-79f9-4041-8eb7-439186372be4.js';
  document.head.appendChild(script);
}

function changeLocation() {
  // Code to change the location
  window.open('https://www.etix.com/ticket/p/6710779/choctaw-indian-fair-pearl-river-choctaw-indian-fair');
}
