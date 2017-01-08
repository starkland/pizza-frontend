(function() {
  'use strict';

  function ContatoCtrl(MapService) {
    MapService.newMap();
  }

  ContatoCtrl.$inject = [
    'MapService'
  ];

  angular
    .module('Contato')
    .controller('ContatoCtrl', ContatoCtrl);
})();