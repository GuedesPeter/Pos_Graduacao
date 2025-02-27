/*O Merge Sort é um algoritmo eficiente baseado no conceito de dividir e conquistar. 
Ele divide o array em duas metades, ordena essas metades recursivamente e depois as combina. */


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);
  
    return merge(mergeSort(esquerda), mergeSort(direita));
  }
  
  function merge(esquerda, direita) {
    let resultado = [];
    let i = 0, j = 0;
  
    // Mescla as duas metades ordenadas
    while (i < esquerda.length && j < direita.length) {
      if (esquerda[i] < direita[j]) {
        resultado.push(esquerda[i]);
        i++;
      } else {
        resultado.push(direita[j]);
        j++;
      }
    }
  
    // Adiciona os elementos restantes
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
  }
  
  // Testando o Merge Sort
  const array = [38, 27, 43, 3, 9, 82, 10];
  console.log("Array ordenado (Merge Sort):", mergeSort(array));
  

  /*O Merge Sort divide o array em partes menores até que cada subarray tenha apenas um elemento. 
  Em seguida, ele começa a combinar os subarrays ordenados para formar o array final ordenado.
  Complexidade: O(n log n), que é muito eficiente para grandes volumes de dados.
 */