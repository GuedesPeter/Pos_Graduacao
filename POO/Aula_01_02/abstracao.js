/*
A abstração é um dos pilares da Programação Orientada a Objetos (POO). 
Ela permite esconder detalhes complexos de implementação, 
fornecendo uma interface simplificada para o usuário interagir com os objetos.
*/

// Exemplo:

// Classe base abstrata
class Veiculo {
    constructor(marca, modelo) {
      if (this.constructor === Veiculo) {
        throw new Error("Não é permitido instanciar uma classe abstrata.");
      }
      this.marca = marca;
      this.modelo = modelo;
    }
  
    // Método abstrato
    ligar() {
      throw new Error("Método 'ligar' precisa ser implementado");
    }
  
    mostrarInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }
  
  // Classe Carro que herda de Veiculo
  class Carro extends Veiculo {
    constructor(marca, modelo, tipo) {
      super(marca, modelo);
      this.tipo = tipo;
    }
  
    // Implementação do método abstrato
    ligar() {
      console.log("O carro está ligado.");
    }
  }
  
  // Classe Moto que herda de Veiculo
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    // Implementação do método abstrato
    ligar() {
      console.log("A moto está ligada.");
    }
  }
  
  // Usando as classes
  try {
    const veiculo = new Veiculo("Marca Genérica", "Modelo Genérico"); // Erro
  } catch (error) {
    console.log(error.message); // Não é permitido instanciar uma classe abstrata
  }
  
  const carro = new Carro("Toyota", "Corolla", "Sedan");
  carro.mostrarInfo();
  carro.ligar();
  
  const moto = new Moto("Yamaha", "R1", 1000);
  moto.mostrarInfo();
  moto.ligar();

  /*
  Explicação:
Classe Veiculo: É uma classe base abstrata, ou seja, não podemos criar instâncias diretamente dela. 
Ela contém um método ligar, que é um método abstrato, ou seja, deve ser implementado pelas classes filhas.

Classes Carro e Moto: Elas herdam de Veiculo e implementam o método ligar, que é específico para cada tipo de veículo.

A abstração: 
O que estamos fazendo é abstrair os detalhes específicos de como cada veículo é ligado e fornecendo uma interface comum (o método ligar e mostrarInfo), 
sem precisar se preocupar com esses detalhes em nosso código principal.

  */