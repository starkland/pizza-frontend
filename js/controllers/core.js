(function() {
  'use strict';

  function CoreCtrl() {
    console.info('CoreCtrl');
  }

  CoreCtrl.$inject = [
  ];

  angular
    .module('Core')
    .controller('CoreCtrl', CoreCtrl);
})();