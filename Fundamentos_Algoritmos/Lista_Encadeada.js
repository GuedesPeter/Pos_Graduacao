
// Definindo o nó (Nodo) da lista
class No {
    constructor(dado) {
      this.dado = dado;  // Armazena o valor
      this.proximo = null;   // Ponteiro para o próximo nó
    }
  }
  
  // Definindo a lista encadeada
  class ListaEncadeada {
    constructor() {
      this.head = null;  // Inicia a lista com o nó inicial como nulo
    }
  
    // Adiciona um nó no final da lista
    adicionar(dado) {
      const novoNo = new No(dado);
  
      if (this.head === null) {
        this.head = novoNo;  // Se a lista estiver vazia, o novo nó é o primeiro
        return;
      }
  
      let atual = this.head;
      while (atual.proximo !== null) {
        atual = atual.proximo;  // Vai até o final da lista
      }
  
      atual.proximo = novoNo;  // Adiciona o novo nó no final
    }
  
    // Exibe os elementos da lista
    exibir() {
      let atual = this.head;
      while (atual !== null) {
        console.log(atual.dado);  // Exibe o valor do nó
        atual = atual.proximo;  // Vai para o próximo nó
      }
    }
  }
  
  // Criando uma lista encadeada e adicionando elementos
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  
  // Exibindo os elementos da lista
  lista.exibir();
  console.log("========================================================================")
  
  //-----------------------------------------------------------------------------------
  // UTILIZANDO MAPS E SET 
 //-----------------------------------------------------------------------------------

 // Definindo o nó da lista
class Nodo {
    constructor(dados) {
      this.dados = dados;  // Armazena os dados (um Map)
      this.proximo = null;  // Ponteiro para o próximo nó
    }
  }
  
  // Definindo a lista encadeada
  class ListaEncadeada_Map_Set {
    constructor() {
      this.head = null;  // Inicia a lista com o nó inicial como nulo 
    }
  
    // Adiciona um nó no final da lista
    adicionar(dados) {
      const novoNo = new Nodo(dados);
  
      if (this.head === null) {
        this.head = novoNo;  // Se a lista estiver vazia, o novo nó é o primeiro
        return;
      }
  
      let atual = this.head;
      while (atual.proximo !== null) {
        atual = atual.proximo;  // Vai até o final da lista
      }
  
      atual.proximo = novoNo;  // Adiciona o novo nó no final
    }
  
    // Exibe os elementos da lista
    exibir() {
      let atual = this.head;
      while (atual !== null) {
        console.log(atual.dados);  // Exibe o dicionário do nó (Map)
        atual = atual.proximo;  // Vai para o próximo nó
      }
    }
  }
  
  // Criando um Map com as informações de uma pessoa
  const pessoa1 = new Map();
  pessoa1.set("nome", "João");
  pessoa1.set("idade", 30);
  pessoa1.set("profissao", "Engenheiro");
  
  // Criando outro Map para outra pessoa
  const pessoa2 = new Map();
  pessoa2.set("nome", "Maria");
  pessoa2.set("idade", 25);
  pessoa2.set("profissao", "Médica");
  
  // Criando a lista encadeada e adicionando as pessoas
  const lista_encadeada = new ListaEncadeada_Map_Set();
  lista_encadeada.adicionar(pessoa1);
  lista_encadeada.adicionar(pessoa2);
  
  // Exibindo os dados da lista
  lista_encadeada.exibir();
  