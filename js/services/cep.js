(function() {
  'use strict';

  function CepService($q, $http, ApiConfig) {
    var apiUrl;

    apiUrl = ApiConfig.CEP_URL;

    // ====

    function _success(response) {
      return response.data;
    }

    function _error(err) {
      return $q.reject(err.status);
    }

    // ====

    function GetDataByCep(cep) {
      return $http
              .get(apiUrl + cep + '/json/')
              .then(_success)
              .catch(_error);
    }

    // ====

    return {
      get: GetDataByCep
    };
  }

  CepService.$inject = [
    '$q',
    '$http',
    'ApiConfig'
  ];

  angular
    .module('Core.services', [])
    .factory('CepService', CepService);
})();