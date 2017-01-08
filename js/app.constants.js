(function() {
  'use strict';

  var ApiConfig;

  ApiConfig = {
    'CEP_URL': 'https://viacep.com.br/ws/'
  };

  angular
    .module('Core.constants', [])
    .constant('ApiConfig', ApiConfig);
})();