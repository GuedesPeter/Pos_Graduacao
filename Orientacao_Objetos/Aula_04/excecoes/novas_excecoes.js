/*
Novas Exceções 
• Criando novos tipos de exceções 
• Pode-se Herdar a classe Error 
• Exemplo:

*/

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
  }
  
  
  try {
    vaiDarErro();
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
  