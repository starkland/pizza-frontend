(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'API_URL': 'http://localhost:3000'
  };

  angular
    .module('Core.constants', [])
    .constant('ApiConfig', ApiConfig);
})();