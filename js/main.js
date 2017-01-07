(function () {

  'use strict';

  var form;

  form = document.getElementById('form-pedido');

  // ====

  function handleForm(event) {
    console.info(this);
    var obj;

    event.preventDefault();

    obj = {
      nome: this.nome.value,
      email: this.email.value,
      endereco: this.endereco.value,
      cep: this.cep.value,
      telefone: this.telefone.value,
      pizza: this.tamanho.value,
      ingredientes: this.ingredientes.value
    };

    console.info(obj);
  }

  // ====

  form.addEventListener('submit', handleForm, false);
})();
