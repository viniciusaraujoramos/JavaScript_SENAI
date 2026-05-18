// //CONDICIONAIS

// //Lidando com numeros de maneira silmpres

// let temperatura = Number(prompt("Digite uma temperatura:"));

// if (temperatura < 20){
//     console.log("A temperatura está baixa!")
// } else{
//     console.log("A temperatura está alta!")
// }

// let bateria = Number(prompt("Digite a porcentagem da sua bateria:"));

// if (bateria <= 20){
//     console.log("O nível da bateria está baixo!")
// } else{
//     console.log("O nível da bateria está alto")
// }

// //Lidando com palavras de maneira simples

// let TipoUsuario = prompt("Digite o tipo de usuario: (admin/usuario)").toLowerCase();

// if (TipoUsuario == "admin"){
//     console.log("Acesso total libeirado")
// } 
// else if(TipoUsuario == "usuario"){
//     console.log("Acesso limitado")
// }
// else{
//     console.log("Usuario inválido!")
// }

// //toLowerCase() é uma ferramenta para transformar todos os caracteries recebidos em uma variável em letras minúsculas 

// let Velocidade = Number(prompt("Digite a velocidade da sua internet:"))

// if (Velocidade <= 100){
//     console.log("Sua internet é rapida!")
// }
// else if (Velocidade <= 50) {
//     console.log("Sua internet é lenta!")
// }
// else{
//     console.log("Sua internet é BIZARRA!!!!")
// }

// Misturando condicionais e operadores

// let quantidade = 10;

// if(quantidade = ){
//     console.log("Nenhum item")
// }
// else if(quantidade < 5 ){
//     console.log("Poucos itens")
// }
// else if(quantidade >=5 && quantidade <10){
//     console.log("Alguns itens")
// }
// else{
//     console.log("Muitos itens")
// }

// if else dentro de um if else

// const nota = 10;

// if (nota >7){
//     if(nota==10){
//         console.log("Aprovado com parabenização!!")
//     }
//     else{
//         console.log("Aprovado!")
//     }

// }
// else{
//     console.log("Reprovado")
// }

// let Dispositivo = prompt("Digite em qual dispositivo está: (celular, tablet ou computador)").toLowerCase()

// if(Dispositivo == "celular" || Dispositivo == "tablet"){
//     console.log("Versão mobile ativa")
// }
// else if(Dispositivo == "computador"){
//     console.log("Versão de PC")
// }
// else {
//     console.log("Dispositivo desconhecido")
// }

// let tema = prompt("Digite a cor de tema dessa pagina (vermelho, azul, preto ou branco").toLowerCase()

// switch(tema){
//     case "vermelho":
//         console.log("Pronto, está vermelho")
//         document.body.style.backgroundColor = "#ff0000"
//         break
//     case "azul":
//         console.log("Pronto, está azul")
//         document.body.style.backgroundColor = "#0000ff"
//         break
//     case "preto":
//         console.log("Pronto, está preto")
//         document.body.style.backgroundColor = "#000000"
//         break
//     case "branco":
//         console.log("Pronto, está branco")
//         document.body.style.backgroundColor = "#ffffff"
//         break
//     default:
//         console.log("Tema invalido")
//         break
// }   