(function() {

  'use strict';

  // ====

  class Storage {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }

    get() {
      return JSON.parse(localStorage.getItem(this.key));
    }

    set() {
      return localStorage.setItem(this.key, JSON.stringify(this.value));
    }

    info() {
      return localStorage;
    }
  };

  class Cep {
    constructor(cep, addressArea) {
      this.cep = cep;
      this.url = `https://viacep.com.br/ws/${this.cep}/json/`;
    }

    response(response) {
      return response.json();
    }

    error(error) {
      throw new Error(error);
    }

    handleSuccess(data) {
      let storage = new Storage('endereco', data);
      storage.set();

      let endereco = document.getElementById('endereco');
      endereco.value = `${data.logradouro}, ${data.bairro}, ${data.localidade}`;
    }

    get() {
      fetch(this.url)
        .then(this.response)
        .then(this.handleSuccess)
        .catch(this.error);
    }
  };

  function handleBlur() {
    let cep = this.value;

    if (cep && typeof cep === 'string') {
      const CepService = new Cep(cep);
      CepService.get();
    }
  }

  // ====

  let field = document.getElementById('cep');
  field.addEventListener('blur', handleBlur, false);

})();