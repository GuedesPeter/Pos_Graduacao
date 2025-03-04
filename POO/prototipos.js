/*
PROTOTYPES

Em JavaScript, prototypes são objetos associados a cada função e objeto, permitindo que compartilhem métodos e propriedades. 
Todo objeto tem um protótipo, e quando você acessa uma propriedade que não existe no objeto, o JavaScript a busca no protótipo.

- Funções construtoras têm um `prototype` onde métodos são definidos, e as instâncias criadas a partir dessa função herdam esses métodos.
- A cadeia de protótipos permite que objetos herdem propriedades de outros objetos.
- O método `__proto__` é usado para acessar o protótipo de um objeto, embora não seja recomendado seu uso direto.

Em resumo, prototypes são fundamentais para a herança e compartilhamento de código em JavaScript.

 */

console.log("-------------------------- Exemplo 1 ------------------------------")

function Pessoa () {
    this.nome = "Fulado de Tal";
    this.anoDeNascimento = 1987;
    this.profissao = "Advogado";
    this.calculaIdade = function (){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa = new Pessoa();
console.log(Object.getPrototypeOf(pessoa));
const pessoa1 = new Pessoa();
console.log(Object.getPrototypeOf(pessoa1));

console.log("-------------------------- Exemplo 2 ------------------------------")

const funcionario = new Object();

funcionario.nome = ["Beltrano"];
funcionario.anoDeNascimento = 1990;
funcionario.profissao = "Médico";
funcionario.calculaIdade = function (){
    return new Date().getFullYear() - this.anoDeNascimento;
};

console.log(Object.getPrototypeOf(funcionario));

const empregado = Object.create(funcionario);

console.log(Object.getPrototypeOf(empregado));

console.log("-------------------------- Exemplo 2 ------------------------------")
console.log("------------------- Herança Prototipada ----------------------")

Pessoa.prototype.saudar = function (objeto) {
    console.log("Olá " + objeto.nome);
 };

 pessoa.saudar(pessoa1);
 pessoa1.saudar(pessoa);

 