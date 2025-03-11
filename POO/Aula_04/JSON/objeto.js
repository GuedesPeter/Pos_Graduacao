/*
JSON 
• JavaScriptprovê o método JSON.parsepara converter uma string no formato JSON em um objeto

*/

// Exemplo 1: ----------------------------------------------------------------------

let user= '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'; 
// propriedade ainda não existe, logo teremos erro 
console.log(user.friends[0] ?? "Propriedade inexistente"); 

user = JSON.parse(user); 
console.log(user.friends[0]);

// Exemplo 2: ----------------------------------------------------------------------

/*
Cuidado! Não assuma que a conversão suporta qualquer tipo! 
• O exemplo a seguir utiliza um objeto Date, que é serializado como Stringe, portanto, não é desserializadoautomaticamente para Date 
• Deve-se utilizar a função reviver, que é um dos parâmetros da função JSON.parse
*/

var json = '{ "name":"John Doe", "birth":"2017-11-30T12:00:00.000Z", "city":"Porto Alegre"}';
var obj = JSON.parse(json, function(key, value) {
  if (key == "birth") {
    return new Date(value);
  }
  return value;
});
console.log("Nome: " + obj.name);
console.log("DNasc: " + obj.birth);
