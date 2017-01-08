(function() {
  'use strict';

  function CepService() {
    function _get() {
      console.log('CepService.get');
    }

    // ====

    return {
      get: _get
    };
  }

  angular
    .module('Core.services', [])
    .factory('CepService', CepService);
})();