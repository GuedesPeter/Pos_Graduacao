 
 // MAPS - Dicionários
 // Armazena os dados de forma contígua definidos por CHAVE e VALOR (KEY - VALUE)
 // As CHAVES são únicas - Não podem ser repetidas
 // Os VALORES podem ser repetidos 
 
 // DECLARANDO O MAP

 // Criando um Map
const meuMap = new Map();

// Adicionando chaves e valores
meuMap.set('nome', 'João');
meuMap.set('idade', 25);
meuMap.set('profissão', 'Desenvolvedor');

// Acessando valores com a chave
console.log(meuMap.get('nome')); // João
console.log(meuMap.get('idade')); // 25
console.log(meuMap.get('profissão')); // Desenvolvedor

console.log("-----------------------------------------");
console.log("FORMAS DE ITERAÇÃO");
console.log("-----------------------------------------");

// Criando um Map com alguns dados
const myMap = new Map();
myMap.set('nome', 'João');
myMap.set('idade', 25);
myMap.set('profissão', 'Desenvolvedor');

// Iterando sobre o Map com forEach
myMap.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
});

// Resultado:
// nome: João
// idade: 25
// profissão: Desenvolvedor

console.log("-----------------------------------------");

// Iterando com for...of
for (const [chave, valor] of meuMap) {
    console.log(`${chave}: ${valor}`);
}

// Resultado:
// nome: João
// idade: 25
// profissão: Desenvolvedor

console.log("-----------------------------------------");