(function() {
  'use strict';

  angular
    .module('Core', [
      'Core.config',
      'Core.constants',
      'Core.interceptor',
      'Core.services',
      'Utils.map',
      'Utils.geolocation'
    ]);
})();