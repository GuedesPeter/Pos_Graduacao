
//Definindo uma Função e seus parâmetros
function AvaliaParidade (limiteSuperior) {
    for (let i=0 ; i < limiteSuperior; i++) {
        if(i % 2 == 1){
            console.log(i + " é um número Ímpar!"); 
        
        } 
        else 
        console.log(i + " é um número Par!");
    }

}


AvaliaParidade(10);