var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.js-nav-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Map

ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.938716, 30.323047],
    zoom: 15,
    controls: ['zoomControl']
  });

  const placemark = new ymaps.Placemark([59.938716, 30.323047], {
    iconLayout: 'default#image'
  });

  map.geoObjects.add(placemark);
}
