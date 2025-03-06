/*
Tipos de Valor (Primitivos)
Os tipos de valor (ou primitivos) em JavaScript são simples e não podem ser modificados diretamente. 
Quando você atribui um valor de tipo primitivo a uma nova variável, você está criando uma cópia desse valor.
*/

/*
String

Representa texto.
Exemplo: "Olá, Mundo!" 

*/

let nome = "Maria";
let saudacao = nome;  // Copia o valor "Maria" para saudacao
saudacao = "João";    // Muda apenas a variável saudacao, nome continua "Maria"
console.log(nome);     // Maria
console.log(saudacao); // João

/*
Number

Representa números (inteiros ou de ponto flutuante).
Exemplo: 42, 3.14
*/

let a = 10;
let b = a;  // Copia o valor 10 para b
b = 20;     // Muda apenas a variável b, a continua 10
console.log(a); // 10
console.log(b); // 20

/*
Boolean

Representa valores lógicos: true ou false.
Exemplo: true, false
*/

let isActive = true;
let isUser = isActive;  // Copia o valor true para isUser
isUser = false;         // Muda apenas isUser, isActive continua true
console.log(isActive);  // true
console.log(isUser);    // false

/*
Undefined

Representa uma variável que foi declarada, mas ainda não foi inicializada.
Exemplo: let x; // x é undefined
*/

let x;
console.log(x);  // undefined

/*
Null

Representa a ausência intencional de valor ou um objeto.
Exemplo: null

*/

let y = null;
console.log(y);  // null

/*
Symbol (introduzido no ES6)

Representa um identificador único e imutável.
Exemplo: Symbol('descrição')
*/

let id = Symbol('id');
let id2 = Symbol('id');
console.log(id === id2);  // false, cada símbolo é único


/*
BigInt (introduzido no ES11)

Representa números inteiros de precisão arbitrária.
Exemplo: 1234567890123456789012345678901234567890n
*/

let bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum);  // 1234567890123456789012345678901234567890n
