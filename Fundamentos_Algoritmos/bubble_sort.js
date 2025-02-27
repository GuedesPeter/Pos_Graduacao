/*O Bubble Sort é um algoritmo de ordenação simples, porém ineficiente, que percorre a lista várias vezes, 
comparando elementos adjacentes e trocando-os se estiverem na ordem errada. */


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Troca os elementos
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Testando o Bubble Sort
  const array = [64, 25, 12, 22, 11];
  console.log("Array ordenado (Bubble Sort):", bubbleSort(array));
  

  /*Explicação:
O algoritmo percorre o array várias vezes e vai "movendo" os maiores elementos para o final (como uma bolha subindo à superfície), 
repetindo até que o array esteja completamente ordenado.
Complexidade: O(n²), onde n é o número de elementos no array. */
