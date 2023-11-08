
// ---- yandex map

let myMap;

function initializeMap(center) {
  myMap = new ymaps.Map('map', {
    center: center,
    zoom: 11,
    controls: []
  });
}

function setMapCenter() {
  if (window.innerWidth < 860) {
    myMap.setCenter([55.963047, 37.891656]);
  }
}

ymaps.ready(function () {
  initializeMap([55.963047, 37.983656]);
  window.addEventListener('resize', setMapCenter);
});
