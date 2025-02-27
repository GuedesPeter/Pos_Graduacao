
/* O Quick Sort é outro algoritmo eficiente baseado em dividir e conquistar. 
Ele escolhe um "pivô" e divide o array em dois subarrays: um com elementos menores que o pivô e outro com elementos maiores. 
Depois, ordena recursivamente os subarrays.*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1]; // Pivô
    const menores = [];
    const maiores = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        menores.push(arr[i]);
      } else {
        maiores.push(arr[i]);
      }
    }
  
    // Recursão para ordenar os subarrays
    return [...quickSort(menores), pivot, ...quickSort(maiores)];
  }
  
  // Testando o Quick Sort
  const array = [10, 80, 30, 90, 40, 50, 70];
  console.log("Array ordenado (Quick Sort):", quickSort(array));
  

  /*Explicação:
O Quick Sort escolhe um pivô e divide o array em duas partes: uma com elementos menores que o pivô e outra com elementos maiores. 
Ele então aplica recursivamente o mesmo processo nas duas partes.
Complexidade: O(n log n) na melhor média, mas pode ser O(n²) no pior caso (caso o pivô seja escolhido de maneira ineficiente). */