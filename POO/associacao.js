
/*Associação entre objetos em programação orientada a objetos (POO) refere-se à relação entre dois ou mais objetos, onde um objeto usa ou interage com outro. 
Essa associação pode ser de diferentes tipos, dependendo da forma como os objetos se relacionam. 
Em JavaScript, a associação entre objetos é comumente feita ao incluir um objeto dentro de outro ou ao estabelecer uma relação de colaboração entre objetos.

Tipos de Associação:
Associação simples: Um objeto tem uma referência a outro objeto. A relação é simples, sem qualquer tipo de hierarquia.

Exemplo: Uma Pessoa pode ter um Endereço. 

Composição: A associação é mais forte e os objetos formam uma relação onde a vida de um objeto depende da vida do outro. 
Se o objeto principal for destruído, os objetos compostos também serão.

Exemplo: Um Carro possui Rodas, e, sem o carro, as rodas não têm sentido.

Agregação: É uma forma mais fraca de associação, onde um objeto pode existir independentemente de outro. 
Por exemplo, um Aluno pode ter várias Disciplinas, mas as disciplinas existem fora do contexto do aluno.

*/

/*

Resumo da associação - Exemplo Abaixo:
Pessoa ↔ Estudante: A classe Estudante herda de Pessoa, formando uma relação de herança.
Estudante ↔ Nota: A classe Estudante possui um array notas, onde armazena objetos do tipo Nota, formando uma relação de composição.

*/

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



class Estudante extends Pessoa {
    #matricula;
    notas = [];
  
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
  
    addNota(nota) {
      this.notas.push(nota);
    }
  }


  
  class Nota {
    constructor(disciplina, grau) {
      this.disciplina = disciplina;
      this.grau = grau;
    }
  }
  
