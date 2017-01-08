(function() {
  'use strict';

  function InitApp($rootScope, $window, Storage) {
    $rootScope.online = navigator.onLine;

    function handleStatus(event) {
      switch(event.type) {
        case 'offline':
          $rootScope.$apply(function() {
            $rootScope.online = false;
          });
        break;

        case 'online':
          $rootScope.$apply(function() {
            $rootScope.online = true;
          });

          Storage.verify();
        break;
      }
    }

    $window.addEventListener('offline', handleStatus, false);
    $window.addEventListener('online', handleStatus, false);
  }

  angular
    .module('LaraApp', [
      'Core',
      'About',
      'Pedido',
      'Contato',
      'Social'
    ])
    .run(InitApp);
})();