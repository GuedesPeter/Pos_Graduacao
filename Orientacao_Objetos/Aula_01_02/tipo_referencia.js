/*
Tipos de Referência
Os tipos de referência são mais complexos e referenciam objetos na memória. 
Quando você atribui uma variável de tipo referência a outra, ambas as variáveis apontam para o mesmo objeto, ou seja, elas compartilham o mesmo valor na memória.
*/

/*
Object

Representa coleções de propriedades.
Exemplo: { nome: "João", idade: 30 }

*/
let pessoa = { nome: "João", idade: 30 };
let outraPessoa = pessoa;  // Ambas as variáveis apontam para o mesmo objeto
outraPessoa.idade = 31;    // Altera o valor do objeto referenciado
console.log(pessoa.idade); // 31
console.log(outraPessoa.idade); // 31

/*
Array

Representa uma lista de elementos.
Exemplo: [1, 2, 3, 4]

*/

let numeros = [1, 2, 3];
let maisNumeros = numeros;  // Ambas as variáveis referenciam o mesmo array
maisNumeros.push(4);        // Modifica o array original
console.log(numeros);       // [1, 2, 3, 4]
console.log(maisNumeros);   // [1, 2, 3, 4]

/*
Function

Funções também são objetos em JavaScript e, portanto, são passadas por referência.
Exemplo: function somar(a, b) { return a + b; }
*/

function somar(a, b) {
    return a + b;
  }
  
  let minhaSoma = somar;  // Copia a referência da função
  console.log(minhaSoma(2, 3));  // 5

  
  /*
  Date

Representa datas.
Exemplo: new Date()
  */

let data1 = new Date();
let data2 = data1;  // Ambas as variáveis apontam para o mesmo objeto Date
data2.setFullYear(2000);  // Altera o ano da data
console.log(data1.getFullYear());  // 2000
console.log(data2.getFullYear());  // 2000

/*
RegExp

Representa expressões regulares.
Exemplo: /\d+/
*/

let regex1 = /\d+/;
let regex2 = regex1;  // Ambas as variáveis referenciam o mesmo objeto RegExp
console.log(regex1.test("123"));  // true
