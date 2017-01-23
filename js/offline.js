(function() {

  'use strict';

  // ====

  function handleStatus(event) {
    const body = document.getElementsByTagName('body')[0];

    switch(event.type) {
      case 'offline':
        body.classList.add('offline');
      break;

      case 'online':
        body.classList.remove('offline');
      break;
    }
  }

  // ====

  window.addEventListener('offline', handleStatus, false);
  window.addEventListener('online', handleStatus, false);

})();