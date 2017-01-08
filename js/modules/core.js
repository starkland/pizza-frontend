(function() {
  'use strict';

  angular
    .module('Core', [
      'Core.constants',
      'Core.services',
      'Utils.map',
      'Utils.network'
    ]);
})();