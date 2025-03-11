/*
Capturando Exceções 
• Para capturar e tratar exceções, utiliza-se o bloco de comandos try...catch...finally 
• No bloco tryestão colocados os comandos que podem provocar o lançamento de uma exceção 
• As exceções são capturadas no bloco catch 
• O bloco finallycontém código a ser executado, independente da ocorrência de exceções 

*/

try {
    // código que pode gerar exceção
  } catch (e) {
    // código que trata exceção
  } finally {
    // tratamento geral
  }
  

/*
Capturando Exceções 
Capturando Exceções - Bloco catch

O bloco catch captura todas as exceções.
Uma boa técnica é tratar as exceções adequadas ao momento.
Relançar as exceções que não se sabe como tratar no momento.
*/

let json = "incorreto";

try {
  let pessoa = JSON.parse(json);
  console.log(pessoa.nome);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log(`Erro ${err.name}: ${err.message}`);
  } else {
    console.log("Relança a exceção pois não sabe como tratar");
    throw err;
  }
} finally {
  console.log("Encerra tratamento");
}
