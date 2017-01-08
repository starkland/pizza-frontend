(function() {
  'use strict';

  function ContatoCtrl(MapService) {
    console.info('ContatoCtrl');

    MapService.newMap();
  }

  ContatoCtrl.$inject = [
    'MapService'
  ];

  angular
    .module('Contato')
    .controller('ContatoCtrl', ContatoCtrl);
})();