(function() {

  'use strict';

  var field, Cep, Storage, endereco;

  field = document.getElementById('cep');
  endereco = document.getElementById('endereco');

  // ====

  Storage = {
    get: function(key) {
      return JSON.parse(localStorage.getItem(key));
    },

    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  Cep = {
    get: function(cep) {
      var url;

      url = 'https://viacep.com.br/ws/' + cep + '/json/';

      fetch(url).then(function(response) {
        response.json().then(function(data) {
          Storage.set('endereco', data);

          endereco.value = data.logradouro + ', ' + data.bairro +  ', ' + data.localidade;
        })
      }, function(err) {
        console.error(err);
      })
    }
  };

  function handleBlur(event) {
    if (this.value) {
      Cep.get(this.value);
    }
  }

  // ====

  field.addEventListener('blur', handleBlur, false);

})();