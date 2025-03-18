/*
• Array.foreach()
Itera sobre cada um dos itens da lista, aplicando alguma ação
 */

// Exemplo 1:

array = [4,5,6,7,8,9,10]
array.forEach((nro) => console.log(nro+" -> "+(nro%2==0?"par":"ímpar")))
nroDivisores = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
    if((item%divisor)== 0)
        ndiv++
    return ndiv;
}


// Exemplo 2:

array.forEach((nro) => console.log(nro+`-> nDivisores de 1 até ${nro} =`+nroDivisores(nro) ))