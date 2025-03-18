/*
Exemplo de construção –CASO 01 
• Classe carro com atributo privado, gettere setter 
• Razões da privacidade •Alternativa para gettere setter 

*/

export class Carro { 
    #_tanque 
    #_capacidadeDoTanque 
    constructor(valor){ 
        this.#_tanque=0 
        this.#_capacidadeDoTanque=valor 
    } 
    
    gettanque(){ 
        returnthis.#_tanque 
    } 
    
    getcapacidade(){
         returnthis.#_capacidadeDoTanque 
    }

    settanque(qtde){ 
        if(qtde>=0) if(qtde+this.#_tanque>this.#_capacidadeDoTanque) 
            this.#_tanque = this.#_capacidadeDoTanque; 
        else this.#_tanque+=qtde 
    } 
}


