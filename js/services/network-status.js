(function() {
  'use strict';

  function NetworkStatus() {
    function _get() {
      console.log('NetworkStatus.get');
    }

    // ====

    return {
      get: _get
    };
  }

  angular
    .module('Utils.network', [])
    .factory('NetworkStatus', NetworkStatus);
})();