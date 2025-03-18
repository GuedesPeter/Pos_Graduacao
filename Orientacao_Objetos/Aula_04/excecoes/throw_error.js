/*
Exceções
  • Falhas nas condições podem ser indicadas ao programador através do conceito de exceções
  • Quando uma função encontra uma situação anormal, ela informa tal anormalidade pelo lançamento (geração) de uma exceção
  • Ex.: a função JSON.parse(string) irá lançar uma exceção SyntaxError se o formato do objeto JSON for incorreto
  • Quando um bloco de código tenta detectar uma situação anormal, ele captura essa exceção, possivelmente indicando que irá realizar o tratamento do problema encontrado

*/
/*

Lançando Exceções
  • Para lançar uma exceção dentro de uma função que estamos desenvolvendo:
    • Lançar a exceção via comando `throw`
    • Qualquer valor pode ser utilizado, porém é mais adequado utilizar objetos `Error` e suas subclasses
    • Propriedades principais: `name` e `message`
*/

try {
    throw new Error('Gerando um erro genérico!');
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
  