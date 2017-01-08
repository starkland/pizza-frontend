(function() {
  'use strict';

  function ContatoCtrl($rootScope, Geolocation, MapService, Storage) {
    var location, mapContainer;

    location = Storage.get('position');
    mapContainer = document.getElementById('map-container');

    // ====

    if (!location) {
      Geolocation.getByUser();
    }
    // else {
    //   MapService.newMap(location, mapContainer);
    // }

    // ====

    $rootScope.$on('position', function(evt, obj) {
      MapService.newMap(obj.data, mapContainer);
    });
  }

  ContatoCtrl.$inject = [
    '$rootScope',
    'Geolocation',
    'MapService',
    'Storage'
  ];

  angular
    .module('Contato')
    .controller('ContatoCtrl', ContatoCtrl);
})();