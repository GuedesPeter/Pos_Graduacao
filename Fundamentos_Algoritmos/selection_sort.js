/* O Selection Sort é um algoritmo de ordenação simples, mas ineficiente. 
Ele funciona encontrando o menor (ou maior, dependendo da ordem) elemento em uma lista e trocando-o com o primeiro elemento. 
Depois, ele repete esse processo para o restante da lista, até que todos os elementos estejam ordenados. */

function selectionSort(arr) {
    let n = arr.length;
    
    // Passa por todos os elementos do array
    for (let i = 0; i < n - 1; i++) {
      let indiceMinimo = i;
  
      // Encontra o menor elemento no array não ordenado
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[indiceMinimo]) {
          indiceMinimo = j;
        }
      }
  
      // Troca o menor elemento com o primeiro elemento não ordenado
      if (indiceMinimo !== i) {
        [arr[i], arr[indiceMinimo]] = [arr[indiceMinimo], arr[i]];
      }
    }
  
    return arr;
  }
  
  // Testando o Selection Sort
  const array = [64, 25, 12, 22, 11];
  console.log("Array ordenado (Selection Sort):", selectionSort(array));
  

  /*Explicação do Selection Sort:
O algoritmo começa com o primeiro elemento e encontra o menor valor do restante do array.
Ele então troca esse menor valor com o primeiro elemento.
Depois, ele considera o restante da lista e repete o processo, sempre começando do próximo elemento.
O processo continua até que o array esteja completamente ordenado. */