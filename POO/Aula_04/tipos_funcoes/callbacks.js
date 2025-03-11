/*
Assíncrono significa que não se espera a função chamada terminar sua execução para o nosso código seguir em frente

Funções Assíncronas 
• A API de programação do JavaScript possui muitas funções de execução assíncrona 
• Por exemplo, o pacote “fs” do NodeJS possui muitas funções para manipulação de arquivos de maneira assíncrona
*/

/*
Callbacks 
• Muitas APIs de JavaScript para funções assíncronas utiliza o conceito de funções de callback 
• São funções que são chamadas quando uma outra função terminou seu processamento 
• Resulta em pequenas funções que são encadeadas para realizar um processamento 
• Encadear múltiplos callbacks resulta em um código de difícil manutenção 
*/

const fs = require('fs'); 
fs.readFile('package.json', function (err, buf) { 
    console.log(buf.toString());
 });

 fs.readFile(path[options], callback)

// Exemplos: ------------------------------------------------

const fs = require('fs');

const onRead = function(err, buf) {
  if (err) {
    console.log("Houve um erro");
  } else {
    console.log(buf.toString());
  }
};

fs.readFile('01a_textoQualquer.txt', onRead);

// -----------------------------------------------------------

const fs = require('fs');

fs.readFile('01a_textoQualquer.txt', (err, buf) => {
  if (err) {
    console.log("Houve um erro");
  } else {
    console.log(buf.toString());
  }
});

 // -----------------------------------------------------------

const fs = require('fs');

fs.readFile('01a_textoQualquer.txt', (err, buf) => {
  if (err) throw err;
  else console.log(buf.toString());
});
