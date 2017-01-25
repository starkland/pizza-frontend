(function() {
  'use strict';

  function NotFoundInterceptor($q, $location) {

    function responseError(rejection) {
      if (rejection.status === 404) {
        console.warn('Deu 404!');
        $location.path('/error/404');
      }

      return $q.reject(rejection);
    }

    return {
      responseError: responseError
    };
  }

  NotFoundInterceptor.$inject = [
    '$q',
    '$location'
  ];

  angular
  .module('Core.interceptor', [])
  .factory('NotFoundInterceptor', NotFoundInterceptor);
})();