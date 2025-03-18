/*
O método estático em JavaScript é um método que pertence à própria classe e não a uma instância da classe. 
Isso significa que ele pode ser chamado diretamente pela classe, sem a necessidade de criar um objeto dessa classe.
Ex.:
NomeDaClasse.metodo()

*/
console.log('------------------------- EXEMPLO 1 ---------------------------')
class ValidadorDeCPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    // Método estático
    static validarCPF(cpf) {
        // Verificar se o CPF tem 11 caracteres
        if (cpf.length === 11) {
            console.log("CPF válido!");
        } else {
            console.log("CPF Inválido!");
        }
    }
}

// Chamando o método estático diretamente pela classe
ValidadorDeCPF.validarCPF('01045409087'); // Saída: CPF Válido!
console.log('----------------------------------------------------')
// Chamando o método estático diretamente pela classe
ValidadorDeCPF.validarCPF('01045409087'); // Saída: CPF Inválido!

console.log('------------------------- EXEMPLO 2 ---------------------------')

class ValidadorDeID {
    static TAMANHO_ID = 5;

    static validarId(tamanho) {
        if (tamanho == ValidadorDeID.TAMANHO_ID) { 
        } else {
            console.log('Id Inválido');
        }
    }
}

ValidadorDeID.validarId(12345); // Saída: Id Válido!
console.log('----------------------------------------------------')
ValidadorDeID.validarId(123); // Saída: Id Inválido!


console.log('------------------------- EXEMPLO 3 ---------------------------')

class Pessoa { 
    constructor(nome, anoDeNascimento, profissao) { 
        this.nome = nome; 
        this.anoDeNascimento = anoDeNascimento; 
        this.profissao = profissao; 
    }; 
    
    static saudar() { 
        console.log('Bom dia!'); 
    }; 
    
    calculaIdade() { 
        return console.log(new Date().getFullYear() - this.anoDeNascimento) ;
    }; 
}; 

console.log(Pessoa.saudar());
const pessoa = new Pessoa('Maria', 1997, 'Advogada');
pessoa.calculaIdade();