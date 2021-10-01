const hotelSlider = new  Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--prev',
    prevEl: '.hotel-slider__button--next',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new  Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
        center: [7.838000, 98.298813],
        zoom: 15
  });
// Создание метки 
			var myPlacemark = new ymaps.Placemark(
			// Координаты метки
			[7.838000, 98.298813]        
			);
 
// Добавление метки на карту
		myMap.geoObjects.add(myPlacemark);
}
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function (){
  console.log('Клик по кнопке меню');
  document
  .querySelector(".navbar-bottom")
  .classList.toggle('navbar-bottom--visible');
});