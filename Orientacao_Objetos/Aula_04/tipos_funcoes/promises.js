/*
Promises
  • A partir do ECMAScript6 (2015), a linguagem fornece o suporte a objetos Promise
  • Permitem o controle do fluxo de execução assíncrono de funções de maneira mais “limpa” do que o uso de call-backs
  • Representa o resultado final ou falha de uma operação assíncrona
  • Ideia: uma função irá retornar uma promessa de um objeto contendo o resultado de interesse no futuro
*/

//Promises
  //• Construtor de objetos Promise:
      let promise = new Promise(function(resolve, reject) {
          // corpo do executor
      });

      /*
• Função passada ao construtor é chamada de executor e é chamada automaticamente quando a promise é criada
• Essa função possui o que será executado e que “no futuro” irá retornar um valor ou um erro

• Propriedades internas da promise (sem acesso público):
 • state – representa o estado da execução da promise, inicialmente “pending”
 • result – representa o resultado da computação, inicialmente undefined


• A ação de um objeto promise pode:
    • Terminar com sucesso
        • Diz-se que a promise foi “resolvida” e está no estado “fulfilled”
        • Executar a função resolve(valor)

    • Terminar com falha
        • Diz-se que a promise foi “rejeitada” e está no estado “rejected”
        • Executar a função reject(erro)

*/
/*
• Para obter o resultado de uma promise, utiliza-se o método then
    • Esse método registra uma função de callback que será chamada quando o objeto promise produzir um resultado
*/

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sucesso!");
    }, 2000);
});

let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
};

myFirstPromise
    .then(ifSucceed);

console.log("Fim do programa");

/*• Para tratar de uma promise rejeitada, utiliza-se o método catch
    • Esse método registra uma função de callback que será chamada quando o objeto promise produzir algum tipo de exceção
    • É apenas um alias para o método then(null, callback)
 */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido"), 2000);
});

myPromise
    .then(result => {
        console.log(result);
        return "valor";
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log("Fim do programa");



  /*• As promises podem ser encadeadas
  • Permite a sequencialização de chamadas de funções assíncronas
  • O padrão de codificação
      • A callback registrada no then produz outra promise passada adiante
      • A callback retorna uma promise configurada por ela ou um valor qualquer */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido"), 2000);
});

promise1
    .then(result => {
        console.log(result);
        return "valor";
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log("Fim do programa");
