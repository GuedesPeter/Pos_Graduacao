
// O Conjunto SET NÃO PERMITE  valores duplicados

// DECLARANDO O SET

// Criando um Set
const meuSet = new Set();

// Adicionando elementos ao Set
meuSet.add('João');
meuSet.add(25);
meuSet.add('Desenvolvedor');

// O Set não permite valores duplicados
meuSet.add('João');  // Não será adicionado novamente

// Verificando se um valor existe no Set
console.log(meuSet.has('João')); // true
console.log(meuSet.has('Maria')); // false

// Exibindo o conteúdo do Set
console.log(meuSet); 
// Set { 'João', 25, 'Desenvolvedor' }

console.log("-----------------------------------------");

// Criando um Set com alguns dados
const mySet = new Set();
mySet.add('João');
mySet.add(25);
mySet.add('Desenvolvedor');

console.log("-----------------------------------------");
console.log("FORMAS DE ITERAÇÃO");
console.log("-----------------------------------------");

// Iterando sobre o Set com forEach
mySet.forEach(valor => {
    console.log(valor);
});

// Resultado:
// João
// 25
// Desenvolvedor

console.log("-----------------------------------------");

// Iterando com for...of
for (const valor of meuSet) {
    console.log(valor);
}

// Resultado:
// João
// 25
// Desenvolvedor

console.log("-----------------------------------------");