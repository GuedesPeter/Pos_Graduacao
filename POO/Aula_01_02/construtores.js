/*
Em JavaScript, this e new são conceitos importantes, mas possuem comportamentos distintos:

this:

Refere-se ao contexto de execução atual, ou seja, o objeto ao qual uma função ou método pertence.

O valor de this varia dependendo de como a função é chamada:
Em uma função global, this geralmente se refere ao objeto global (em ambientes de navegador, é o window).
Dentro de um método de um objeto, this refere-se ao próprio objeto.
Em uma função construtora, this refere-se à instância do objeto que está sendo criado.

new:

A palavra-chave new é usada para criar uma nova instância de um objeto a partir de uma função construtora.

Ao usar new, o JavaScript cria um novo objeto vazio e vincula this a esse objeto dentro da função construtora, permitindo a criação de novos objetos com base em um molde (a função construtora).
A função construtora normalmente tem um comportamento semelhante a uma classe, mas antes da introdução das classes no ES6, new era utilizado para criar instâncias de objetos.
Em resumo, this é um mecanismo para se referir ao contexto de execução, e new cria instâncias de objetos com base em funções construtoras.

*/

// Exemplo:

// A função construtora deve ter seu nome criado com a letra inicial MAIÚSCULA, como se fosse uma classe.
// Assim, por convenção , diferenciamos de metodos e atributos.
// A função construtora tem por objetivo criar outros objetos.

console.log("-------------------- Exemplo 1: ------------------------------");

// THIS
function Pessoa (nome, anoNascimento, profissao) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
    this.calculaIdade =  function () {
        return new Date().getFullYear() - anoNascimento;
    };
};

// NEW

const pessoa = new Pessoa("Paulo", 1991 , "Development");
console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.calculaIdade());

console.log("--------------------------------------------------------------");
console.log("-------------------- Exemplo 2: ------------------------------");

function Funcionario(){
    this.nome = "João";
    this.anoNascimento = 1980;
    this.profissao = "Engenheiro";
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoNascimento; 
    };
};

const funcionario = new Funcionario();
console.log(funcionario.nome);
console.log(funcionario.profissao);
console.log(funcionario.calculaIdade());