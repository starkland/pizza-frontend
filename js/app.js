(function() {
  'use strict';

  function InitApp() {
    console.warn('InitApp');

    // $rootScope.online = navigator.onLine;

    // $window.addEventListener('offline', function() {
    //   $rootScope.$apply(function() {
    //     $rootScope.online = false;
    //   });
    // }, false);

    // $window.addEventListener('online', function() {
    //   $rootScope.$apply(function() {
    //     $rootScope.online = true;
    //   });
    // }, false);
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