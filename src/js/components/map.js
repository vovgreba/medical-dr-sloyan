
// ---- yandex map

ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
    center: [55.963047, 37.983656], // Координаты центра карты

    zoom: 11, // Масштаб карты
    controls: []
  });


  myMap.geoObjects.add(myMap);
});
