ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
        center: [45.029311, 38.974765],
            zoom: 17
}),
    myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Sandbox Development',
        balloonContent: 'Краснодар, ул. Чапаева, д. 94, офис 415. Часы работы пн-пт: 10-19'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
    // Своё изображение иконки метки.

        iconImageHref: 'img/marker.png',

        // Размеры метки.
    iconImageSize: [51, 51],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-22, -50]
});

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark1)
}