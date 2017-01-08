(function() {
  'use strict';

  function PedidoCtrl($log, $rootScope, CepService, Storage) {
    var vm;

    vm = this;

    vm.novoPedido = novoPedido;
    vm.searchCep = _searchCep;

    vm.form = {};
    vm.resumo = {};

    // ====

    function novoPedido() {
      angular.extend(vm.resumo, vm.form);

      if ($rootScope.online) {
        $log.warn('O pedido:', vm.form);
      } else {
        Storage.set('pedido', vm.form);
        $log.info('Seu pedido será enviado quando a internet voltar.');
      }

      vm.form = {};
    }

    function _searchCep() {
      var field;

      field = vm.form.cep;

      CepService.get(field).then(function(response) {
        Storage.set('endereco', response);

        vm.form.endereco = response.logradouro + ', ' + response.bairro +  ', ' + response.localidade;
      }, function(err) {
        $log.error(err);
      });
    }

    // ====

    $rootScope.$on('has_order', function(evt, obj) {
      console.warn('Enviando o seu pedido...', obj.data);
    });
  }

  PedidoCtrl.$inject = [
    '$log',
    '$rootScope',
    'CepService',
    'Storage'
  ];

  angular
    .module('Pedido')
    .controller('PedidoCtrl', PedidoCtrl);
})();