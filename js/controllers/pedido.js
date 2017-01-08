(function() {
  'use strict';

  function PedidoCtrl(CepService) {
    console.info('PedidoCtrl');
    CepService.get();
  }

  PedidoCtrl.$inject = [
    'CepService'
  ];

  angular
    .module('Pedido')
    .controller('PedidoCtrl', PedidoCtrl);
})();