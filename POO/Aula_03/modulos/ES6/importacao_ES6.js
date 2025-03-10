// OBS:

/*
Executando o código
Para usar módulos ES6 no Node.js, você precisa configurar o ambiente para suportar essa funcionalidade.
Configuração do package.json: Certifique-se de adicionar "type": "module" no seu package.json para garantir que o Node.js reconheça os módulos ES6.

{
  "type": "module"
}

 */

// Importando a classe Carro
import Carro from './definicao_es6.js';


const meuCarro = new Carro('Toyota', 'Corolla', 2023);


console.log(meuCarro.exibirInfo());  // Saída: Toyota Corolla (2023) - Velocidade: 0 km/h


meuCarro.acelerar(20);  // Saída: O carro acelerou para 20 km/h.
meuCarro.acelerar(30);  // Saída: O carro acelerou para 50 km/h.

console.log(meuCarro.exibirInfo());  // Saída: Toyota Corolla (2023) - Velocidade: 50 km/h
