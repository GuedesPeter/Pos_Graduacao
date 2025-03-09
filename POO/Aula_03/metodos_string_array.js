//Arrays - Métodos

/*
• Métodos:

• toString() – retorna uma string com os valores do array separados por vírgula

• join() – retorna uma string com os valores do array separados pelo símbolo
fornecido

• concat() – retorna um novo array resultante da concatenação dos arrays
passados por parâmetro

• slice(indice, fim) – particiona um array e retorna um novo array com a
partição, sem alterar o array original

• indexOf() - Retorna o índice da primeira ocorrência de um valor no array (ou -1 se o valor não for encontrado).

• lastIndexOf() - Retorna o índice da última ocorrência de um valor no array (ou -1 se o valor não for encontrado).

• findIndex() - Retorna o índice do primeiro elemento que satisfaz a condição fornecida em uma função, ou -1 se nenhum elemento for encontrado.

*/

// Definindo o array base
let frutas = ['maçã', 'banana', 'laranja'];

// Exemplo do método .toString()
let frutasString = frutas.toString();
console.log('toString:', frutasString); // "maçã,banana,laranja"

// Exemplo do método .join()
let frutasJoin = frutas.join(' - ');
console.log('join:', frutasJoin); // "maçã - banana - laranja"

// Exemplo do método .concat()
let frutasAdicionais = ['kiwi', 'manga'];
let todasFrutas = frutas.concat(frutasAdicionais);
console.log('concat:', todasFrutas); // ['maçã', 'banana', 'laranja', 'kiwi', 'manga']

// Exemplo do método .slice()
let frutasFatiadas = frutas.slice(1, 3);
console.log('slice:', frutasFatiadas); // ['banana', 'laranja']

// Outro exemplo de .slice() sem o índice final
let frutasFatiadas2 = frutas.slice(2);
console.log('slice (sem índice final):', frutasFatiadas2); // ['laranja']

// Exemplo do método .indexOf()
let indexBanana = frutas.indexOf('banana');
console.log('indexOf:', indexBanana); // 1 (primeira ocorrência de 'banana')

// Exemplo do método .lastIndexOf()
let lastIndexBanana = frutas.lastIndexOf('banana');
console.log('lastIndexOf:', lastIndexBanana); // 4 (última ocorrência de 'banana')

// Exemplo do método .findIndex()
let findIndexKiwi = frutas.findIndex(fruta => fruta === 'kiwi');
console.log('findIndex:', findIndexKiwi); // 3 (índice da primeira ocorrência de 'kiwi')

// Exemplo de .findIndex() com um elemento que não existe
let findIndexMelancia = frutas.findIndex(fruta => fruta === 'melancia');
console.log('findIndex (não encontrado):', findIndexMelancia); // -1 (não encontrado)

// ORDENAÇÃO -----------------------------------------------------------------------------

/*

Explicação:

.sort(): Ordena os elementos de um array. Por padrão, ele ordena em ordem lexicográfica (alfabética para strings) e, por isso, 
pode não funcionar corretamente com números.

.reverse(): Inverte a ordem dos elementos no array.

.sort() com função de comparação: Para arrays de números, a ordenação padrão não funciona corretamente (pois o .sort() converte os elementos para strings). 
Usamos uma função de comparação, como (a, b) => a - b para ordenação crescente e (a, b) => b - a para ordenação decrescente.

 */

// Exemplo do método .sort() (ordem alfabética crescente)
let frutasOrdenadas = frutas.sort();
console.log('sort (alfabético crescente):', frutasOrdenadas); // ['banana', 'kiwi', 'laranja', 'maçã', 'manga']

// Exemplo do método .reverse() (inverte a ordem do array)
let frutasInvertidas = frutasOrdenadas.reverse();
console.log('reverse:', frutasInvertidas); // ['manga', 'maçã', 'laranja', 'kiwi', 'banana']

// Exemplo do método .sort() com função de comparação personalizada (ordem numérica crescente)
let numeros = [10, 5, 8, 1, 9];
let numerosOrdenados = numeros.sort((a, b) => a - b);
console.log('sort (números crescente):', numerosOrdenados); // [1, 5, 8, 9, 10]

// Exemplo do método .sort() com função de comparação personalizada (ordem numérica decrescente)
let numerosDecrescentes = numeros.sort((a, b) => b - a);
console.log('sort (números decrescente):', numerosDecrescentes); // [10, 9, 8, 5, 1]
