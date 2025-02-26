
// Função recursiva para calcular o fatorial de um número
function fatorial(n) {
    // Caso base: quando n é 0 ou 1, o fatorial é 1
    if (n === 0 || n === 1) {
      return 1;
    }
    
    // Caso recursivo: n * fatorial(n - 1)
    return n * fatorial(n - 1);
  }
  
  // Testando a função de recursão
  const resultado = fatorial(5);  // 5! = 5 * 4 * 3 * 2 * 1 = 120
  console.log(resultado);  // Exibe 120
  

  /*
  Explicação:
Função fatorial(n):

Caso base: Se n for igual a 0 ou 1, a função retorna 1, pois o fatorial de 0 ou 1 é sempre 1.
Caso recursivo: Se n for maior que 1, a função se chama novamente com n - 1 e multiplica o valor de n pelo resultado da chamada recursiva. Isso continua até que o caso base seja alcançado.
Exemplo de uso:

Chamamos a função fatorial(5) e o cálculo segue a recursão até chegar a fatorial(1), que retorna 1.
A função então retorna 5 * 4 * 3 * 2 * 1 = 120.


Como funciona a recursão:
Chamada inicial: fatorial(5) chama 5 * fatorial(4).
Chamada recursiva: fatorial(4) chama 4 * fatorial(3).
E assim por diante, até que chegamos a fatorial(1), que retorna 1.
Desempilhando as chamadas: Após atingir o caso base, a recursão começa a "desempilhar", e os valores vão sendo multiplicados.

  */ 