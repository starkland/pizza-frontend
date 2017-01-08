(function() {
  'use strict';

  function MapService() {

    function _newMap(obj, container) {
      var latLon, mapOptions, mapContainer, map;

      latLon = new google.maps.LatLng(obj.latitude, obj.longitude);

      mapOptions = {
        zoom: 10,
        center: latLon,
        mapTypeId: 'roadmap',
        scrollwheel: false
      };

      mapContainer = document.getElementById(container);

      map = new google.maps.Map(mapContainer, mapOptions);

      this.showMarker(map, latLon);
    }

    function _showMarker(map, pos) {
      var marker;

      marker = new google.maps.Marker({
        position: pos,
        map: map
      });

      this.setInfoWindow(map, marker);
    }

    function _setInfoWindow(map, marker) {
      var infowindow;

      infowindow = new google.maps.InfoWindow;
      infowindow.setContent('A pizzaria fica aqui!');
      infowindow.open(map, marker);
    }

    // ====

    return {
      newMap: _newMap,
      showMarker: _showMarker,
      setInfoWindow: _setInfoWindow
    };
  }

  angular
    .module('Utils.map', [])
    .factory('MapService', MapService);
})();