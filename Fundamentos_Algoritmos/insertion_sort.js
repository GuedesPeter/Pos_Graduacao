
/*O Insertion Sort funciona como se estivesse organizando cartas de baralho em mãos. 
Ele percorre o array e insere cada elemento na posição correta em relação aos elementos à sua esquerda. */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let chave = arr[i];
      let j = i - 1;
      
      // Move os elementos maiores que a chave para a posição seguinte
      while (j >= 0 && arr[j] > chave) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      
      // Coloca a chave na posição correta
      arr[j + 1] = chave;
    }
    return arr;
  }
  
  // Testando o Insertion Sort
  const array = [12, 11, 13, 5, 6];
  console.log("Array ordenado (Insertion Sort):", insertionSort(array));
  
  /*Explicação:
O Insertion Sort compara cada elemento com os anteriores e o coloca na posição correta. 
Como ele trabalha de forma incremental, a eficiência aumenta à medida que o array fica mais ordenado.
Complexidade: O(n²), mas é mais eficiente que o Bubble Sort em arrays parcialmente ordenados. */