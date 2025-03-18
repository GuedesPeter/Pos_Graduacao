/*
JavaScriptprovê o método JSON.stringfy 
• Converte um objeto para o formato JSON (string) 
• Cuidado: não pode existir referências circulares dentro do objeto
*/

// Exemplo 1: ----------------------------------------------------------------------
let student = { 
    name: 'John', 
    age: 30, 
    isAdmin: false, 
    courses: ['html', 'css', 'js'], 
    wife:null 
}; 

let json = JSON.stringify(student); 
console.log(json);

/*
JavaScriptprovê o método JSON.stringfy 
• Convertendo uma instancia de uma classe com atributos privados
*/

// Exemplo 2: ----------------------------------------------------------------------

import {UmaClasse} from"../desestruturacao/objetos_1.js" 
let umObjetoDeClasse = new UmaClasse("um valor") 

let json_1 = JSON.stringify(umObjetoDeClasse); 
console.log(json_1);