$(document).ready(function () {
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
var menuButton = $(".menu-button");
menuButton.on('click', function (){
  $(".navbar-bottom").toggleClass('navbar-bottom--visible');
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});