// FORMA LITERAL

let pessoa = {
    nome: "Maria",
    idade : 35,
    altura : "1.65",
    falar: function () {
        console.log("Olá!");
     }
}

let carro = {
    modelo: "Uno",
    marca: "Fiat",
    ano: 1997,
    cor: "Branco",
    ligar: function () {
        console.log("Carro Ligado!");
    },
    desligar: function () {
        console.log("Carro Desligado!");
    }
}

// TESTANDO OS OBJETOS

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.falar();

console.log("--------------------------------");

console.log(carro.modelo);
console.log(carro.cor);
carro.ligar();
carro.desligar();

// ATRIBUIÇÃO

pessoa.nome = "Ana"
pessoa.idade = 21
console.log("--------------------------------");
carro.modelo = "Palio"
carro.cor = "Vermelho"

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.falar();

console.log("--------------------------------");

console.log(carro.modelo);
console.log(carro.cor);

// SEGUNDA FORMA

console.log("--------------------------------");

let pessoa2 = {
    nome: ["Fulano", "de Tal"],
    anoNascimento: 1991,
    profissão: "Desenvolvedor",
    calculaIdade: function(){
        // return new Date().getFullYear() - this.anoNascimento;
        return console.log(new Date().getFullYear() - this.anoNascimento);
    }
};


console.log(pessoa2.nome)
console.log(pessoa2.profissão)
pessoa2.calculaIdade();