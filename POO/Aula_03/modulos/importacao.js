
// Importando a classe Pessoa
const Pessoa = require('./definicao.js');

// Criando uma nova instância da classe Pessoa
const pessoa1 = new Pessoa('João', 'Silva');

// Chamando o método exibirNomeCompleto
console.log(pessoa1.exibirNomeCompleto());  // Saída: João Silva
