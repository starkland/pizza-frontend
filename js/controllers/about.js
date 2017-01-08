(function() {
  'use strict';

  function AboutCtrl() {
    console.info('AboutCtrl');
  }

  angular
    .module('About')
    .controller('AboutCtrl', AboutCtrl);
})();