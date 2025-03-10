// OBS:

/*
Executando o código
Para usar módulos ES6 no Node.js, você precisa configurar o ambiente para suportar essa funcionalidade.
Configuração do package.json: Certifique-se de adicionar "type": "module" no seu package.json para garantir que o Node.js reconheça os módulos ES6.

{
  "type": "module"
}

 */

// Exemplo 1: ----------------------------------------------------------------------


// Importando a classe Carro
import Carro from './definicao_es6.js';


const meuCarro = new Carro('Toyota', 'Corolla', 2023);


console.log(meuCarro.exibirInfo());  // Saída: Toyota Corolla (2023) - Velocidade: 0 km/h


meuCarro.acelerar(20);  // Saída: O carro acelerou para 20 km/h.
meuCarro.acelerar(30);  // Saída: O carro acelerou para 50 km/h.

console.log(meuCarro.exibirInfo());  // Saída: Toyota Corolla (2023) - Velocidade: 50 km/h


// Exemplo 2: ----------------------------------------------------------------------


// Importando a classe Carro com desestruturação
import { Carro } from './definicao_es6.js';

// Criando uma nova instância da classe Carro
const meuCarro1 = new Carro('Toyota', 'Corolla', 2023);
console.log(meuCarro1.exibirInfo());



// Exemplo 3: ----------------------------------------------------------------------


// Importando todo o módulo com *
import * as CarroModulo from './definicao_es6.js';

// Criando uma nova instância da classe Carro
const meuCarro2 = new CarroModulo.Carro('Honda', 'Civic', 2022);
console.log(meuCarro2.exibirInfo());
