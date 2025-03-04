/*
HERANÇA: 

A herança é um conceito fundamental da Programação Orientada a Objetos (POO) que permite que uma classe (chamada de classe filha ou subclasse) herde propriedades e 
comportamentos de outra classe (chamada de classe pai ou superclasse).

Em outras palavras, a herança permite que a classe filha reutilize o código da classe pai, sem precisar reescrever tudo. 
A classe filha pode adicionar suas próprias propriedades e métodos, ou até mesmo sobrescrever os métodos da classe pai para alterar o comportamento.
*/

// Exemplo: 

// Classe pai
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    // Método da classe pai
    falar() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  
  // Classe filha que herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome);  // Chama o construtor da classe pai
      this.raca = raca;
    }
  
    // Sobrescreve o método da classe pai
    falar() {
      console.log(`${this.nome} diz: Au au!`);
    }
  }
  
  // Usando as classes
  const cachorro = new Cachorro("Rex", "Labrador");
  cachorro.falar();  // Rex diz: Au au!

  

/*
Explicação:
Classe Animal: A classe Animal é a classe base (pai). Ela tem um construtor que define o nome do animal e um método falar, que imprime uma mensagem genérica.

Classe Cachorro: A classe Cachorro herda de Animal usando a palavra-chave extends. 
Ela tem seu próprio construtor que chama o construtor da classe pai com super(nome). 
Além disso, ela sobrescreve o método falar para fornecer um comportamento específico para cachorros.

Usando as classes: Ao criar um objeto cachorro da classe Cachorro, chamamos o método falar, 
que exibe a mensagem específica para o cachorro, mostrando como a herança e a sobrescrita de métodos funcionam.

*/