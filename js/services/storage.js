(function() {
  'use strict';

  function Storage($rootScope) {
    function getStorage(key) {
      return JSON.parse(localStorage.getItem(key));
    }

    function setStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function verifyStorage() {
      var pedido;

      pedido = this.get('pedido');

      if (pedido) {
        $rootScope.$broadcast('has_order', {
          data: pedido
        });
      }
    }

    // ====

    return {
      get: getStorage,
      set: setStorage,
      verify: verifyStorage
    };
  }

  Storage.$inject = [
    '$rootScope'
  ];

  angular
    .module('Core.services')
    .factory('Storage', Storage);
})();