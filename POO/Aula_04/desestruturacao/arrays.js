
/*
Desestruturação 
• A desestruturação é um operação comum na linguagem 
• A ideia é “desempacotar” algo em vários “pedaços” 
• A desestruturação é aplicável, por exemplo, em 
• Módulos importados 
• Arrays 
• Objetos 
• etc
*/

/*Desestruturando Arrays[] 
•A operação de atribuição pode utilizar um modo de “desestruturação” que permite funcionalidades interessantes 
•A ideia é “desempacotar” um arrayem vários “pedaços” 

*/

let nomeCompleto = ['Edson', "Ifarraguirre", "Moreno"]; 

var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto; 
console.log("O primeiro nome é: " + primeiroNome); 
console.log("O nome do meio é: " + nomeDoMeio); 
console.log("O último nome é: " + ultimoNome); 

var [primeiroNome, ...restante] = nomeCompleto; 
console.log("O primeiro nome é: " + primeiroNome); 
console.log("O restante do nome é: \"" + restante.toString().replace(',', ' ') + '"'); 

var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto; 
console.log("O primeiro nome é: " + soOPrimeiroNome); 
console.log("O último nome é: " + soOUltimoNome);
