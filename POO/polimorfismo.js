/* 
POLIMORFISMO:

O polimorfismo é um conceito da Programação Orientada a Objetos (POO) que permite que diferentes classes tenham métodos com o mesmo nome, mas com comportamentos diferentes. 
Em outras palavras, o polimorfismo permite que um mesmo método tenha comportamentos diferentes dependendo do tipo do objeto que o invoca.
 */

// Exemplo:

// Classe pai
class Animal {
    falar() {
      console.log("O animal faz um som.");
    }
  }
  
  // Classe filha Cachorro que sobrescreve o método falar
  class Cachorro extends Animal {
    falar() {
      console.log("O cachorro diz: Au au!");
    }
  }
  
  // Classe filha Gato que sobrescreve o método falar
  class Gato extends Animal {
    falar() {
      console.log("O gato diz: Miau!");
    }
  }
  
  // Usando as classes
  const animal = new Animal();
  animal.falar();  // O animal faz um som.
  
  const cachorro = new Cachorro();
  cachorro.falar();  // O cachorro diz: Au au!
  
  const gato = new Gato();
  gato.falar();  // O gato diz: Miau!

  
/*
Classe Animal: Define um método falar() genérico.
Classe Cachorro e Classe Gato: Ambas as classes herdam de Animal e sobrescrevem o método falar() para ter comportamentos específicos para cada tipo de animal.

O polimorfismo se manifesta quando chamamos o método falar() em diferentes objetos (um Animal, um Cachorro, e um Gato). 
Apesar de todos eles usarem o mesmo nome de método (falar), cada um executa uma ação diferente dependendo do tipo do objeto.

Polimorfismo em Ação:
O polimorfismo permite que, com o mesmo nome de método (falar), o comportamento seja diferente para objetos de tipos diferentes (como Cachorro ou Gato). 
Isso é chamado de polimorfismo de substituição, ou seja, o método é substituído pela versão específica da classe filha.

*/