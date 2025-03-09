/*
1. .push()
Descrição: Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
Exemplo:
 */

let frutas = ['maçã', 'banana'];
frutas.push('laranja');
console.log(frutas); // ['maçã', 'banana', 'laranja']

console.log("----------------------------------------")

/*
2. .pop()
Descrição: Remove o último elemento de um array e o retorna.
Exemplo:
*/

let frutas1 = ['maçã', 'banana', 'laranja'];
let removido1 = frutas1.pop();
console.log(frutas1); // ['maçã', 'banana']
console.log(removido1); // 'laranja'

console.log("----------------------------------------")

/* 
3. .shift()
Descrição: Remove o primeiro elemento de um array e o retorna.
Exemplo:
*/

let frutas2 = ['maçã', 'banana', 'laranja'];
let removido2 = frutas2.shift();
console.log(frutas2); // ['banana', 'laranja']
console.log(removido2); // 'maçã'

console.log("----------------------------------------")

/*
4. .unshift()
Descrição: Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
Exemplo:
*/

let frutas3 = ['banana', 'laranja'];
frutas3.unshift('maçã');
console.log(frutas3); // ['maçã', 'banana', 'laranja']

console.log("----------------------------------------")

/*
5. .map()
Descrição: Cria um novo array com os resultados da execução de uma função em cada elemento do array original.
Exemplo:
*/

let numeros = [1, 2, 3];
let quadrados = numeros.map(num => num * num);
console.log(quadrados); // [1, 4, 9]

console.log("----------------------------------------")

/*
6. .filter()
Descrição: Cria um novo array com todos os elementos que passam em um teste (fornecido por uma função).
Exemplo:
*/

let num = [1, 2, 3, 4, 5];
let pares = num.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

console.log("----------------------------------------")

/*
7. .forEach()
Descrição: Executa uma função em cada elemento do array, mas não retorna nada.
Exemplo:
*/

let legumes = ['tomate', 'alface', 'couve'];
legumes.forEach(legume => console.log(legume));
// Saída:
// tomate
// alface
// couve

console.log("----------------------------------------")

/*
8. .find()
Descrição: Retorna o primeiro elemento do array que satisfaz a condição fornecida em uma função.
Exemplo:
*/

let valores = [10, 20, 30, 40];
let encontrado = valores.find(num => num > 25);
console.log(encontrado); // 30

console.log("----------------------------------------")

/*
9. .reduce()
Descrição: Executa uma função redutora (que pode acumular valores) em cada elemento do array, resultando em um único valor.
Exemplo:
*/

let vals = [1, 2, 3, 4];
let soma = vals.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // 10

console.log("----------------------------------------")

/*
10. .includes()
Descrição: Verifica se um determinado elemento existe no array, retornando true ou false.
Exemplo:
*/

let pessoas = ['João', 'Maria', 'Ana'];
console.log(frutas.includes('Maria')); // true
console.log(frutas.includes('Pedro')); // false
