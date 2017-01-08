(function() {
  'use strict';

  function MapService() {
    function _newMap() {
      console.log('MapService.newMap');
    }

    // ====

    return {
      newMap: _newMap
    };
  }

  angular
    .module('Utils.map', [])
    .factory('MapService', MapService);
})();