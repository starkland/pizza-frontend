(function() {
  'use strict';

  function Geolocation($log, $rootScope, Storage) {
    var location;

    function _success(position) {
      var obj;

      obj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      Storage.set('position', obj);

      $rootScope.$broadcast('position', {
        data: obj
      });
    }

    function _error(msg) {
      $log.error('Geolocation: ', msg);
    }

    // ====

    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(_success, _error);
      } else {
        $log.warn('Este navegador não suporta Geolocation!');
      }
    }

    // ====

    return {
      getByUser: getUserLocation
    };
  }

  Geolocation.$inject = [
    '$log',
    '$rootScope',
    'Storage'
  ];

  angular
    .module('Utils.geolocation', [])
    .factory('Geolocation', Geolocation);
})();