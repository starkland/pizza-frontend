(function () {

  'use strict';

  // ====

  class MapaService {
    constructor(lat, lng, mapContainer) {
      this.lat = lat;
      this.lng = lng;

      this.latLng = new google.maps.LatLng(this.lat, this.lng);

      this.mapContainer = mapContainer;
      this.mapOptions = {
        zoom: 10,
        center: this.latLng,
        mapTypeId: 'roadmap',
        scrollwheel: false
      };

      this.map = new google.maps.Map(this.mapContainer, this.mapOptions);
    }

    Marker() {
      return new google.maps.Marker({
        position: this.latLng,
        map: this.map
      });
    }

    InfoWindow(marker, content) {
      const infowindow = new google.maps.InfoWindow;

      infowindow.setContent(content);
      infowindow.open(this.map, marker);
    }
  };

  function success(position) {
    let mapContainer = document.getElementById('map-container');

    const obj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };

    let { latitude: lat, longitude: lng } = obj;

    let Mapa = new MapaService(lat, lng, mapContainer);
    let marker = Mapa.Marker();
    Mapa.InfoWindow(marker, 'A pizzaria fica aqui!');
  }

  function error(err) {
    throw new Error(err);
  }

  // ====

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.error('Este navegador não suporta Geolocation!');
  }

})();