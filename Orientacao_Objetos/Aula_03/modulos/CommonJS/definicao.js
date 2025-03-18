
/*
Módulo - CommonJS 
• Característica 
• Padrão utilizado por um grande número de pacotes disponibilizados via NPM 
• Ambiente de execução do NodeJS suporta o padrão CommonJS 
• Módulos que contém as definições • Definem suas interfaces via exports e module.exports 
• Usa-se exports para adicionar propriedades ao objeto criado automaticamente pelo sistema de módulos 
• Use module.exports para definir o próprio objeto a ser retornado 
• Dependências para outros módulos são importadas via função require

*/

class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    exibirNomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  }
  
  // Exportando a classe Pessoa
  module.exports = Pessoa;
  