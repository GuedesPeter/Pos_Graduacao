/*
Async/Await
  • Disponível a partir do ECMAScript 2017
  • Modelo sintático para facilitar o uso de objetos Promise
  • Palavra-chave async marca uma função ou método como sendo assíncrono
  • Quando uma função assíncrona for chamada, ela automaticamente retorna um objeto Promise para retornos de qualquer tipo
  • Palavra-chave await antes de uma expressão que fornece um objeto Promise faz com que o código espere até que a promise seja resolvida (fornecendo o resultado) ou rejeitada (levantando uma exceção)
  • Só pode ser utilizada dentro de funções marcadas com async

Async/Await

  • Exemplo */


async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });
    let resultado = await promise;
    return resultado;
}


console.log("Iniciando o programa");
fazAlgo().then((msg) => console.log(msg));
console.log("Finalizando o programa");


console.log("Iniciando o programa");
fazAlgo().then((msg) => console.log(msg));
console.log("Finalizando o programa");


async function main() {
    console.log("Iniciando o programa");
    console.log(await(fazAlgo()));
    console.log("Finalizando o programa");
}

main();
