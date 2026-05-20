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

// for(let i = 1;i<=5; i++){
//     console.log("OI");
// }

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
// let contador = 1;

// while(contador<=3){
//     console.log("Repetindo...");
//     console.log(contador);
//     contador++
// }

// FOREACH
// Usado para percorrer lista de elementos

// let nomes = ["Davi", "Felipe", "Amanda"];

// Situação com a função simplificada
// nomes.forEach(nome =>{
//     console.log("Nome:"+ nome)
//     console.log(nomes[2])
// })

// Função completa

// nomes.forEach(function(nome){
//     console.log("Nome:" + nome)
// })

// Sistema de intervalo definido pelo usuário
// let inicio = Number(prompt("Digite o número inicial:"));
// let final = Number(prompt("Digite o número final:"));

// if(inicio<final){
//     for(let i = inicio; i<final; i++){
//         console.log(i)
//     }
// }
// else{
//     console.log("O número inicial tem que ser menor que o final")
// }

// While com condição para sair do sistema

// let valor = ""

// while (valor != "sair"){
//     valor =prompt("Digte algo ou sair para parar");
//     console.log("Você digitou: " + valor)
// }

// // DO WHILE
// // executa pelo menos uma vez antes da condição
// // executa, depois pergunta
// let numero = 4;

// do {
//     console.log("Executou pelo menos uma vez");
//     numero++
// }
// while(numero < 3); // falso

// // diferença -> 
//             // while pergunta e depois executa
//             // do while executa e depois pergunta
// let numero2 = 1;
// while (numero2 < 3) {
//     console.log("Executou aqui");
//     numero2++
// }

// contador - 1 a 10 (com regra)

// let limite = Number(prompt("Mostrar números maiores que:"));

// for(let i = 1; i <= 10; i++){
//     if(i > limite){
//         console.log(i)
//     }
// }

// percorrendo um array usando for
// let cores = ["Azul", "Verde", "Vermelho"]

//lenght -> tamanho da lista

// console.log(cores.length)

// for(let i = 0; i<cores.length; i++){
//     console.log("Posição da cor:"+ i + "-" + cores[i])
// }

// Condição dentro do foreach
// let numeros = [3, 7, 10, 15];

// numeros.forEach(function(num){
//     if(num > 8){
//         console.log("Maior que 8: "+ num);
//     }
// })

// Percorrendo objeto

// const pessoa = {
//     nome:"Carlos",
//     idade: 28,
//     profissao: "Desenvolvedor"
// }

// IN para objetos

// for(let chave in pessoa){
//     console.log(chave, pessoa[chave]);
// }

// Outro exemplo
// const produto = [
//     {
//         nome: "Notebook",
//         preco: 80,
//         estoque: 40,
//     },
//     {
//         nome:"Celular",
//         preco: 30,
//         estoque: 10,
//     },
//     {
//         nome:"Mouse",
//         preco: 50,
//         estoque:25,
//     },

// ]

// OF para arays

// for(let produtos of produto){
//     console.log(produtos.nome);
    
// }

// for(let produtos of produto){
//     console.log(`Produtos: ${produtos.nome} | Preço: R$${produtos.preco}`)
// }