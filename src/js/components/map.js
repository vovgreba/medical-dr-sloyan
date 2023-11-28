
// ---- yandex map

let myMap;
const map = document.querySelector('#map');

function initializeMap(center) {
  myMap = new ymaps.Map('map', {
    center: center,
    zoom: 11,
    controls: []
  });
  const mainSvgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M10.5 3C6 3 3 7.5 3 12C3 15.165 4.5 19.5 6 21C7.5 22.5 9 33 12 33C18.81 33 15 22.5 18 22.5C21 22.5 17.19 33 24 33C27 33 28.5 22.5 30 21C31.5 19.5 33 15.165 33 12C33 7.5 30 3 25.5 3C21 3 21 4.5 18 4.5C15 4.5 15 3 10.5 3ZM10.5 6C13.5 6 15 7.5 18 7.5C21 7.5 22.5 6 25.5 6C28.005 6 30 9 30 12C30 14.625 28.71 18.165 27.285 19.59C25.995 20.88 24.09 29.91 23.25 29.91C22.935 29.91 22.5 28.32 22.5 26.385C22.5 23.325 21.645 19.5 18 19.5C14.355 19.5 13.5 23.325 13.5 26.385C13.5 28.32 13.065 29.91 12.75 29.91C11.91 29.91 10.005 20.88 8.715 19.59C7.29 18.165 6 14.625 6 12C6 9 7.995 6 10.5 6Z" fill="#E0D2AB"/>
  </svg>
`;

const placemark = new ymaps.Placemark(
  [55.944122, 37.769460],
  {
    balloonContent: "Информация о клинике" // Здесь может быть произвольный HTML-код
  },
  {
    iconLayout: ymaps.templateLayoutFactory.createClass(
      `<div class="map_logo" style="display: flex; align-items: center; justify-content: center;">` +
        `<img src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(mainSvgIcon)}" width="36" height="36" />` +
      `</div>`
    ),
    iconImageSize: [36, 36], // Размер изображения
  }
);

  myMap.geoObjects.add(placemark);
}

function setMapCenter() {
  if (window.innerWidth < 860) {
    myMap.setCenter([55.963047, 37.891656]);
  }
}

if(map) {
  ymaps.ready(function () {
    initializeMap([55.963047, 37.983656]);
    window.addEventListener('resize', setMapCenter);
  });
}

