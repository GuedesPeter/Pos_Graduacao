
// Definindo o nó da árvore
class No {
    constructor(dado) {
      this.dado = dado;  // Armazena o valor
      this.esquerda = null; // Ponteiro para o filho da esquerda
      this.direita = null;  // Ponteiro para o filho da direita
    }
  }
  
  // Definindo a árvore
  class ArvoreBinaria {
    constructor() {
      this.raiz = null;  // A árvore começa sem nenhum nó
    }
  
    // Adiciona um nó na árvore
    adicionar(dado) {
      const novoNo = new No(dado);
      if (this.raiz === null) {
        this.raiz = novoNo;  // Se a árvore estiver vazia, o novo nó é a raiz
      } else {
        this.adicionarNo(this.raiz, novoNo);  // Caso contrário, encontra o lugar correto
      }
    }
  
    // Função recursiva para adicionar o nó na árvore
    adicionarNo(no, novoNo) {
      if (novoNo.dado < no.dado) {
        // Se o valor for menor, vai para a subárvore esquerda
        if (no.esquerda === null) {
          no.esquerda = novoNo;  // Adiciona o novo nó à esquerda
        } else {
          this.adicionarNo(no.esquerda, novoNo);  // Recursivamente chama a função na subárvore esquerda
        }
      } else {
        // Se o valor for maior ou igual, vai para a subárvore direita
        if (no.direita === null) {
          no.direita = novoNo;  // Adiciona o novo nó à direita
        } else {
          this.adicionarNo(no.direita, novoNo);  // Recursivamente chama a função na subárvore direita
        }
      }
    }
  
    // Exibe os dados da árvore em ordem (esquerda, raiz, direita)
    exibirEmOrdem() {
      this._exibirEmOrdem(this.raiz);
    }
  
    // Função recursiva para exibir a árvore em ordem
    _exibirEmOrdem(no) {
      if (no !== null) {
        this._exibirEmOrdem(no.esquerda);  // Exibe a subárvore esquerda
        console.log(no.dado);  // Exibe o dado do nó
        this._exibirEmOrdem(no.direita);  // Exibe a subárvore direita
      }
    }
  }
  
  // Criando uma árvore binária
  const arvore = new ArvoreBinaria();
  
  // Adicionando alguns valores à árvore
  arvore.adicionar(50);
  arvore.adicionar(30);
  arvore.adicionar(70);
  arvore.adicionar(20);
  arvore.adicionar(40);
  arvore.adicionar(60);
  arvore.adicionar(80);
  
  // Exibindo os elementos da árvore em ordem
  arvore.exibirEmOrdem();

  
/*  Explicação:

Classe No: Representa um nó na árvore. 
Cada nó tem um valor (dado), e dois ponteiros: esquerda e direita, que apontam para os filhos esquerdo e direito, respectivamente.

Classe ArvoreBinaria: Representa a árvore binária. 
Tem os seguintes métodos:

 - adicionar(dado): Adiciona um novo nó à árvore. Se a árvore estiver vazia, o nó será a raiz. 
Caso contrário, o nó será adicionado na posição correta.

- adicionarNo(no, novoNo): Função recursiva que decide onde o novo nó será colocado, dependendo do seu valor. 
Se o valor for menor que o do nó atual, ele vai para a subárvore esquerda; se for maior ou igual, vai para a subárvore direita.

- exibirEmOrdem(): Exibe os valores da árvore em ordem (esquerda, raiz, direita), ou seja, percorre a árvore de forma ordenada.

Exemplo de uso:

Criamos a árvore e adicionamos os valores: 50, 30, 70, 20, 40, 60, 80.
A árvore será construída automaticamente em uma estrutura binária.
Por fim, a árvore é exibida em ordem (da menor para a maior) através da função exibirEmOrdem.*/