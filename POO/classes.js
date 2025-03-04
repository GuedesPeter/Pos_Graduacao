/*
Em JavaScript, **classes** são uma maneira simplificada e moderna de criar objetos e lidar com herança. 
Elas definem um molde para criar instâncias de objetos, com métodos e propriedades, usando a palavra-chave `class`.

- **Construtor**: Inicializa as propriedades do objeto.
- **Métodos**: Definem comportamentos que as instâncias terão.
- **Herança**: Classes podem herdar de outras classes com `extends`.


Classes tornam o código mais organizado e claro, oferecendo uma abordagem moderna para trabalhar com objetos e herança.
*/

//Exemplos:

console.log("-------------------------- Exemplo 1 ------------------------------")

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
  
  mostrarModelo() {
    console.log(this.modelo);
  }
}

const meuCarro = new Carro('Fusca');
meuCarro.mostrarModelo(); // Fusca

console.log("-----------------------------------------------------------------")

class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    };

    saudar() {
        console.log("Olá");
    };
    calculaIdade() {
        // return new Date().getFullYear() - this.anoDeNascimento;
        return console.log(new Date().getFullYear() - this.anoDeNascimento);
        };
    };
    const pessoa = new Pessoa(["Fulano"], 1990, "Estudante");

    pessoa.saudar();
    pessoa.calculaIdade(); 

    console.log("-------------------------- HERANÇA ------------------------------")

    // Usamos a palavra chave "EXTENDS" para definir a herança.
    // No exemplo abaixo, Estudante(FILHO) estende de Pessoa (PAI), ou seja, Estudante é uma Pessoa.
    class Estudante extends Pessoa {
        constructor(nome, anoDeNascimento, profissao, matricula){
            super(nome, anoDeNascimento, profissao);
            this.matricula = matricula;
        }

        saudar() {
            console.log(" Olá, meu nome é " + this.nome+"!!");
        }

        obterMatricula() {
            console.log(" Aluno: " + this.nome + " \n " + "Matrícula: " + this.matricula);
        }
    }

    const aluno = new Estudante ("Bia", 2004, "Dentista", 10001 );
    //console.log (aluno);
    aluno.saudar();
    aluno.obterMatricula(); 
    console.log (aluno.profissao);

    console.log("-------------------------- POLIMORFISMO ------------------------------")

    // No exemplo abaixo, Funcionário é "PAI" de Empregado "FILHO"
    // Pode ser observado que Empregado obtém os atributos e métodos de Funcionário
    
    class Funcionario {
        constructor(nome, id, setor) {
            this.nome = nome;
            this.id = id;
            this.setor = setor;
        }
    
        obterDadosFuncionario(id_funcionario) {
            if (this.id === id_funcionario) {
                return console.log("Func.: " + this.nome + " \n " + "Id.: " + this.id + " \n " + "Setor.: " + this.setor);
            } else {
                console.log(id_funcionario + " Não encontrado!");
            }
        }
    }
    
    class Empregado extends Funcionario {
        constructor(nome, id, setor, id_setor) {
            super(nome, id, setor);
            this.id_setor = id_setor;
        }
    
        saudar() {
            console.log("Olá, meu nome é " + this.nome + "!!");
        }
    
        obterDadosFuncionario() {
            super.obterDadosFuncionario(this.id);  
            console.log("Id Setor: " + this.id_setor);
        }
    }
    
    const empregado = new Empregado("Paulo", 16480, "Análise", 7);
    empregado.saudar();
    empregado.obterDadosFuncionario(16480); 