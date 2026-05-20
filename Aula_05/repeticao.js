// ESTRUTURAS DE REPETIÇÃO

// Tipos:

/*
    FOR 
    WHILE
    DO WHILE
    FOREACH
*/

// FOR 
// Usamos para repetir várias vezes quando sabemos quantas vezes o código vai se repetir

for(let i = 1;i<=5; i++){
    console.log("OI");
}

/*

    let i = 1 -> criamos uma variável e chamamos ela de "i".
                essa variável vai servir como um estado inicial a   
                estrutura de repetição conforme for se repetindo, 
                ela vai aumentando de valor

    i<=5;     -> condição: essa condição vai definir o limite de repetições
                enquanto o valor de "i" for menor ou igual a 5 - imprime OI

    i++       -> interador:quando usamos o ++, quer dizer que estamos
                acrescentando +1 dentro do i, i++ é a mesma coisa que i=i+1

*/
// WHILE
// Executa um bloco de código enquanto uma condição for verdadeira
let contador = 1;

while(contador<=3){
    console.log("Repetindo...");
    console.log(contador);
    contador++
}

// FOREACH
// Usado para percorrer lista de elementos

let nomes = ["Davi", "Felipe", "Amanda"];

// Situação com a função simplificada
nomes.forEach(nome =>{
    console.log("Nome:"+ nome)
    console.log(nomes[2])
})

// Função completa

nomes.forEach(function(nome){
    console.log("Nome:" + nome)
})