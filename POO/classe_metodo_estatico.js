/*
O método estático em JavaScript é um método que pertence à própria classe e não a uma instância da classe. 
Isso significa que ele pode ser chamado diretamente pela classe, sem a necessidade de criar um objeto dessa classe.
Ex.:
NomeDaClasse.metodo()

*/

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


