const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--prev',
    prevEl: '.slider-button--next',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
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
