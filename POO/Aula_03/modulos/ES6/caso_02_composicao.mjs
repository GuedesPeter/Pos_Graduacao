
/*
• Classe Herdada CarrosComPlaca, Composição com a classe Locadora 
• Classe Locadora, que explora array, funções de massa de dados e arrowfunction 
*/

import { CarroComPlaca } from "./caso_02.mjs";
export class Locadora {
  #_carros;

  constructor() {
    this.#_carros = [];
  }

  adicionaCarro(umCarro) {
    this.#_carros.push(umCarro);
    console.log(this.#_carros.length);
  }

  consultaCarros() {
    this.#_carros.forEach((carro) =>
      console.log("Carro placa (" + carro.placa + "); tq: " + carro.tanque)
    );
  }

  abasteceCarro(index, quantidade) {
    if (index >= 0 && index < this.#_carros.length) {
      this.#_carros[index].tanque = quantidade;
    }
  }
}


