(function() {
  'use strict';

  function CoreCtrl(NetworkStatus) {
    console.info('CoreCtrl');

    NetworkStatus.get();
  }

  CoreCtrl.$inject = [
    'NetworkStatus'
  ]

  angular
    .module('Core')
    .controller('CoreCtrl', CoreCtrl);
})();