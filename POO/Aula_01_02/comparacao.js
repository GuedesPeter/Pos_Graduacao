
// COM PARANDO PROG. ESTRUTURADA vs POO

//PROG. ESTRUTURADA

let num1 = 10;
let num2 = 20;

function add(num1, num2){
    return num1 + num2;
}

let calcular = add(num1, num2);
console.log(calcular);

console.log("----------------------------------------------------------------");

// PROG. ORIENTADA A OBJETOS

const calculadora = {
    numero1: num1,
    numero2: num2,
    somar: function(num1, num2) {
        return num1 + num2
    },
    subtrair: function(num1, num2) {
        return num1 - num2
    },
    multiplicar: function(num1, num2) {
        return num1 * num2
    },
    dividir: function(num1, num2) {
        return num1 / num2
    }

};

console.log("O resultado da soma entre " + calculadora.somar(2,5));
console.log("O resultado da subtração é " + calculadora.subtrair(10,5));
console.log("O resultado da multiplicação é " + calculadora.multiplicar(2,5));
console.log("O resultado da divisão é " + calculadora.dividir(10,5));