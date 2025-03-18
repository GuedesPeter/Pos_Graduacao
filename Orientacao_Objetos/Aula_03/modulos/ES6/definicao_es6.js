/*
Módulos – ES6 
• Padrão nativo do JavaScript disponível a partir do ECMAScript 6 (2015) 
• Ambiente de execução do NodeJS suporta o padrão ES6 
• Flag --experimental-modules ao executar Node 
• Módulos definem suas interfaces via palavra-chave export 
• Pode-se exportar múltiplas funções, classes, let, const, var 
• Vinculação de exportação default é tratado como elemento principal do módulo 
• Dependências para outros módulos são importadas via palavra-chave import 
• Importar um nome a partir do módulo, importa a exportação default • Importar com sintaxe de desestruturação {} permite importar elementos indicados 
• Importar com * importa o módulo inteiro 
• Importações com {} ou * permite modificar o nome do que foi importado via operador as

*/

 // Exemplo 1: ----------------------------------------------------------------------

class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
    }
  
    acelerar(incremento) {
      this.velocidade += incremento;
      console.log(`O carro acelerou para ${this.velocidade} km/h.`);
    }
  
    exibirInfo() {
      return `${this.marca} ${this.modelo} (${this.ano}) - Velocidade: ${this.velocidade} km/h`;
    }
  }
  
  // Exportando a classe Carro
  export default Carro;

  
  // Exemplo 2: ----------------------------------------------------------------------

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidade = 0;
  }

  acelerar(incremento) {
    this.velocidade += incremento;
    console.log(`O carro acelerou para ${this.velocidade} km/h.`);
  }

  exibirInfo() {
    return `${this.marca} ${this.modelo} (${this.ano}) - Velocidade: ${this.velocidade} km/h`;
  }
}

// Exportando a classe Carro
export { Carro };


