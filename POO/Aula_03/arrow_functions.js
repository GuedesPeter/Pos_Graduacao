/*
Arrow functions (ou funções de seta) em JavaScript são uma forma mais concisa e moderna de escrever funções. 
Elas foram introduzidas no ECMAScript 6 (ES6) e têm algumas diferenças importantes em relação às funções tradicionais.

Sintaxe mais concisa:
A principal característica das arrow functions é sua sintaxe compacta, eliminando a necessidade de usar a palavra-chave function.
*/

const somar = (a, b) => a + b;
console.log(somar(5, 3)); // 8

/* Explicação: A função somar recebe dois parâmetros a e b e retorna a soma deles. 
A sintaxe é mais compacta do que a função tradicional, eliminando a palavra-chave function.
*/

/* 2. Arrow Function com Um Único Parâmetro
Descrição: Quando uma arrow function tem apenas um parâmetro, os parênteses podem ser omitidos.

Exemplo: */
const dobro = x => x * 2;
console.log(dobro(4)); // 8

/* Explicação: Aqui, temos uma função que recebe um único parâmetro x e retorna seu dobro. A 
sintaxe sem parênteses é válida para funções com um único parâmetro. */

/* 3. Arrow Function com Corpo de Função de Múltiplas Linhas
Descrição: Quando a função precisa de múltiplas linhas, você deve usar chaves {} e a palavra-chave return para retornar um valor.

Exemplo: */
const calcularMedia = (a, b, c) => {
  const soma = a + b + c;
  return soma / 3;
};
console.log(calcularMedia(10, 20, 30)); // 20

/* Explicação: Neste exemplo, temos uma função que soma três valores e retorna a média. 
Como há mais de uma linha de código, usamos as chaves {} e a palavra return. */

/* 4. Arrow Function em Métodos de Array
Descrição: Arrow functions são frequentemente usadas como funções de callback em métodos de arrays como map(), filter(), etc.

Exemplo: */
let numeros = [1, 2, 3, 4];
let quadrados = numeros.map(num => num * num);
console.log(quadrados); // [1, 4, 9, 16]

/* Explicação: Aqui, usamos uma arrow function para calcular o quadrado de cada número no array. 
O método map() aplica a função a cada elemento do array e retorna um novo array com os resultados. */

/* Boas Práticas

Concisão: Use arrow functions para funções pequenas e concisas. Elas são perfeitas para expressões simples e callbacks.

Exemplo: */
const soma = (a, b) => a + b;

/* Evite em Métodos de Objetos: Arrow functions não devem ser usadas em métodos de objetos, 
pois não têm o próprio this. O this de uma arrow function é herdado do contexto onde a função foi criada.

Exemplo problemático: */

const obj = {
  nome: 'João',
  saudacao: () => {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};
obj.saudacao(); // undefined

/* Solução: Usar uma função tradicional no lugar: */

const obj2 = {
  nome: 'João',
  saudacao: function() {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};
obj2.saudacao(); // Oi, meu nome é João

/* Evite o Uso em Funções com new: Não é possível usar new com arrow functions. 
Elas não têm um prototype e não podem ser usadas como construtoras.

Exemplo problemático: */

const Pessoa = (nome) => {
  this.nome = nome; // erro: 'this' não funciona em arrow functions
};
const pessoa = new Pessoa('João'); // Erro


/* Restrições das Arrow Functions
this: O valor de this nas arrow functions é léxico, ou seja, ele é herdado do contexto onde a função foi definida. 
Não é possível redefinir o this dentro de uma arrow function. Isso é útil em algumas situações, mas pode ser problemático em métodos de objetos e funções construtoras.
  
Exemplo de comportamento do this: */

function Exemplo() {
  this.nome = 'João';
  setTimeout(() => {
    console.log(this.nome); // 'João' (aqui, 'this' refere-se ao Exemplo)
  }, 1000);
}
new Exemplo();

/* Sem arguments: Arrow functions não têm o objeto arguments, que armazena os argumentos passados para a função. 
Se precisar usar arguments, utilize uma função tradicional.

Exemplo com arguments: */

function exemploTradicional() {
  console.log(arguments);
}
exemploTradicional(1, 2, 3); // [1, 2, 3]

const exemploArrow = () => {
  console.log(arguments); // Erro: 'arguments' não está definido
};
exemploArrow(1, 2, 3);

/* Não podem ser usadas como funções construtoras: Como mencionado anteriormente, 
as arrow functions não podem ser chamadas com new para criar instâncias de objetos. */

/* Resumo
Arrow functions são mais concisas e legíveis, ideais para funções pequenas e callbacks.
Boas práticas: Use para funções simples e em métodos como map(), filter(), etc. Evite em métodos de objetos e funções construtoras.
Restrições: Não têm seu próprio this, arguments ou prototype, o que pode ser limitante em algumas situações.
*/
