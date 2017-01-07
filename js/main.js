(function () {

  'use strict';

  var form, Storage;

  form = document.getElementById('form-pedido');

  // ====

  Storage = {
    get: function(key) {
      return JSON.parse(localStorage.getItem(key));
    },

    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  function SendData(obj) {
    var body, offline, pedido;

    body = document.getElementsByTagName('body')[0];

    offline = '';
    offline = body.classList.contains('offline');

    pedido = '';

    if (offline) {
      Storage.set('pedido', obj);
      console.warn('O usuário não possui conexão com a internet!');
    } else {
      console.info('Seu pedido foi enviado com sucesso!');
    }
  }

  function handleForm(event) {
    event.preventDefault();

    var obj, ingredientes;

    obj = {
      nome: this.nome.value,
      email: this.email.value,
      endereco: this.endereco.value,
      cep: this.cep.value,
      telefone: this.telefone.value,
      pizza: this.tamanho.value,
      ingredientes: this.ingredientes
    };

    SendData(obj);

    this.reset();
  }

  // ====

  form.addEventListener('submit', handleForm, false);
})();
