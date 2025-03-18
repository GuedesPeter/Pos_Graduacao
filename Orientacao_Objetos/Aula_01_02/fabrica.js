
function criarPessoa(nome,ano,profissao) {
    return { 
        nome,
        ano,
        profissao,
        calculaIdade: function (){
            return new Date().getFullYear() - ano;
            }
        }; 
};

const pessoa = criarPessoa("Maria", 2007, "Médica");

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.calculaIdade());

console.log("--------------------------------");

function criarFuncionario (nome, salarioBase, horaExtra, qtHorasExtras) {
    return {
        nome,
        salarioBase,
        horaExtra,
        qtHorasExtras,
        calcularSalario: function () {
            return this.salarioBase + (this.horaExtra * this.qtHorasExtras);
        }
    };
};

const empregado1 = criarFuncionario("João", 2000, 40, 20);
console.log(empregado1.nome);
console.log(empregado1.salarioBase);
console.log(empregado1.calcularSalario());

console.log("--------------------------------");

const empregado2 = criarFuncionario("Bia", 7.500, 125, 10);
console.log(empregado2.nome);
console.log(empregado2.salarioBase);
console.log(empregado2.calcularSalario());
