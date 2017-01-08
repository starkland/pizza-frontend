(function () {

  'use strict';

  // ====

  function BuildMap(obj) {
    var latLon, mapOptions, mapContainer, map, marker, infowindow;

    latLon = new google.maps.LatLng(obj.latitude, obj.longitude);

    mapOptions = {
      zoom: 10,
      center: latLon,
      mapTypeId: 'roadmap',
      scrollwheel: false
    };

    mapContainer = document.getElementById('map-container');

    map = new google.maps.Map(mapContainer, mapOptions);

    marker = new google.maps.Marker({
      position: latLon,
      map: map
    });

    infowindow = new google.maps.InfoWindow;
    infowindow.setContent('A pizzaria fica aqui!');
    infowindow.open(map, marker);
  }

  function _success(position) {
    // console.info('A latitude é: '  + position.coords.latitude);
    // console.info('A longitude é: ' +  position.coords.longitude);

    var obj;

    obj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };

    BuildMap(obj);
  }

  function _error(msg) {
    console.error('Geolocation: ', msg);
  }

  // ====

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(_success, _error);
  } else {
    console.warn('Este navegador não suporta Geolocation!');
  }

})();