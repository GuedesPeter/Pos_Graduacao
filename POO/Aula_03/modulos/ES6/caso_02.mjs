
/*
Exemplo de construção – CASO 02 
• Classe Herdada CarrosComPlaca, Composição com a classe Locadora 
• Classe CarroComPlacaque extendeCarro 
*/

import {Carro} from "./caso_01.mjs" 
export class CarroComPlaca extends Carro{ 
    #_placa 
    constructor(umaPlaca){ 
        super(55) 
        this.#_placa = umaPlaca 
    } 
    
    getplaca(){ 
        returnthis.#_placa 
    } 
}