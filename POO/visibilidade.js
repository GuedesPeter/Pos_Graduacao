/*Em JavaScript, métodos públicos e métodos privados são usados para definir o comportamento de objetos, 
mas com diferentes níveis de acesso.

Métodos públicos: São métodos que PODEM ser acessados de fora da classe ou objeto. 
Qualquer parte do código que tenha acesso ao objeto pode chamar esses métodos.

Métodos privados: São métodos que NÃO podem ser acessados diretamente de fora da classe ou objeto. 
Eles são usados para encapsular funcionalidades que não devem ser acessadas ou alteradas diretamente. 

Em JavaScript, métodos privados podem ser definidos usando # antes do nome do método (em classes).
*/

// Exemplos

console.log('----------------------- Exemplo 1 ----------------------');

// VARIÁVEIS LOCAIS (let)

function PessoaX() {
    let nome = ['Fulano', 'de Tal'];
    let anoDeNascimento = 1990;
    let profissao = "Estudante";
  
    this.calculaIdade = function() {
      return new Date().getFullYear() - anoDeNascimento;
    };
  }
  
  const pessoa = new PessoaX();
  console.log(pessoa.nome); // Retornará undefined - impedido de acessar

  console.log('----------------------- Exemplo 2 ----------------------');

  class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
      this.nome = nome;
      this.anoDeNascimento = anoDeNascimento;
      this.profissao = profissao;
    }
  
    ola() {
      console.log("Olá, sou uma pessoa.");
    }
  }

  // IDENTIFICADORES PRÉ-FIXADOS #

  class Estudante extends Pessoa {
    #matricula;
  
    constructor(nome, anoDeNascimento, profissao, matricula) {
      super(nome, anoDeNascimento, profissao);
      this.#matricula = matricula;
    }
  
    ola() {
      super.ola();
      console.log(" colega!");
    }
  }
  
  const aluno = new Estudante(['Fulano', 'de Tal'], 1990, 'Estudante', 120901);
  console.log(aluno.matricula);// Retornará undefined - impedido de acessar
  
  // EX.: COM ATRIBUTO E MÉTODOS PRIVADOS #

  class Estudante1 extends Pessoa {
    #matricula;
  
    constructor(nome, anoDeNascimento, profissao, matricula) {
      super(nome, anoDeNascimento, profissao);
      this.#matricula = matricula;
      this.#ola();
    }
  
    #ola() {
      super.ola();
      console.log(" colega!");
    }
  }
  
  const aluno1 = new Estudante1(['Fulano', 'de Tal'], 1990, 'Estudante', 120901);
  console.log(aluno1.ola());// Retornará undefined - impedido de acessar
  
  /*

  // MÉTODOS DE ACESSO

  class Estudante extends Pessoa {
  #matricula;

  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, profissao);
    this.#matricula = matricula;
  }

  getMatricula() {
    return this.#matricula;
  }
}

const aluno = new Estudante(['Fulano', 'de Tal'], 1990, 'Estudante', 120901);
console.log(aluno.getMatricula());

// MÉTODOS DE ATRIBUIÇÃO

class Estudante extends Pessoa {
  #matricula;

  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, profissao);
    this.#matricula = matricula;
  }

  getMatricula() {
    return this.#matricula;
  }

  setMatricula(valor) {
    this.#matricula = valor;
  }
}

const aluno = new Estudante(['Fulano', 'de Tal'], 1990, 'Estudante', 120901);
console.log(aluno.getMatricula()); // Exibe matrícula inicial
aluno.setMatricula(158590); // Atualiza matrícula
console.log(aluno.getMatricula()); // Exibe matrícula atualizada


   */
  
  