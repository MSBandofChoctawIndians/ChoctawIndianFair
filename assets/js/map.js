let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.78033, lng: -89.21922},
    zoom: 15,
    styles: myStyles
  });

  const logoImage =
    "https://smattera.github.io/assets/img/markers/fair.png";

  const fairMarker = new google.maps.Marker({
    position: {lat: 32.78292, lng: -89.22362},
    map,
    icon: logoImage,
    animation: google.maps.Animation.DROP,
  });
}

var myStyles =[
  {
      featureType: "poi",
      elementType: "labels",
      stylers: [
            { visibility: "off" }
      ]
  }
];
