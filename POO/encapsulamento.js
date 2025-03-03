/*
Encapsulamento é um conceito da programação orientada a objetos (POO) que visa esconder os detalhes internos de uma classe e expor apenas o que é necessário para o usuário. 
Em JavaScript, podemos usar funções dentro de objetos para simular esse comportamento e esconder propriedades internas que não devem ser acessadas diretamente.

O símbolo # determina que o atributo é privado e NÃO poderá ser acessado de fora da classe.
*/

//Exemplo:

class ContaBancaria {
    // Propriedade privada (não pode ser acessada diretamente fora da classe)
    #saldo;
  
    // Construtor para inicializar a conta com um saldo inicial
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    // Método público para consultar o saldo
    getSaldo() {
      return this.#saldo;
    }
  
    // Método público para depositar dinheiro
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    // Método público para sacar dinheiro
    sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso.`);
      } else {
        console.log("Valor de saque inválido ou saldo insuficiente.");
      }
    }
  }
  
  // Criando uma instância de ContaBancaria
  const minhaConta = new ContaBancaria(1000);
  
  // Acessando o saldo com o método público
  console.log(minhaConta.getSaldo()); // 1000
  
  // Realizando um depósito
  minhaConta.depositar(500);
  
  // Realizando um saque
  minhaConta.sacar(200);
  
  // Tentando acessar o saldo diretamente (não é possível porque #saldo é privado)
  //console.log(minhaConta.#saldo);  // Erro: Private field '#saldo' must be declared in an enclosing class
  
  // Acessando o saldo com o método público após as operações
  console.log(minhaConta.getSaldo()); // 1300
  

