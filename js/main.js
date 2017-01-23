(function () {

  'use strict';

  // ====

  // Criando uma nova classe utilizando a forma declarativa
  // ====

  class Storage {
    constructor(key, value = null) {
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

  function SendData(obj) {
    const body = document.getElementsByTagName('body')[0];
    let offline = body.classList.contains('offline');

    let storage = new Storage('pedido', obj);

    if (offline) {
      storage.set();
      console.warn('O usuário não possui conexão com a internet!');
    } else {
      console.info('Seu pedido foi enviado com sucesso!');
    }
  }

  function DisplayOnScreen(obj) {
    var box, nome, tamanho, ingredientes, endereco, telefone, email;

    box = document.getElementById('pedido-details');

    nome = document.getElementById('txt-nome');
    tamanho = document.getElementById('txt-tamanho');
    ingredientes = document.getElementById('txt-ingredientes');
    endereco = document.getElementById('txt-endereco');
    telefone = document.getElementById('txt-telefone');
    email = document.getElementById('txt-email');

    box.style.visibility = 'visible';

    nome.innerHTML = obj.nome;
    tamanho.innerHTML = obj.tamanho;
    ingredientes.innerHTML = obj.ingredientes;
    endereco.innerHTML = obj.endereco;
    telefone.innerHTML = obj.telefone;
    email.innerHTML = obj.email;
  }

  function handleForm(event) {
    event.preventDefault();

    let ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');
    const ingredientesArray = [];

    ingredientes.forEach((element, index) => ingredientesArray.push(element.value));

    const obj = {
      nome: this.nome.value,
      email: this.email.value,
      endereco: this.endereco.value,
      cep: this.cep.value,
      telefone: this.telefone.value,
      tamanho: this.tamanho.value,
      ingredientes: ingredientesArray
    };

    SendData(obj);
    DisplayOnScreen(obj);

    this.reset();
  }

  // ====

  const form = document.getElementById('form-pedido');
  form.addEventListener('submit', handleForm, false);

})();
