//FÁCIL

//EXERCÍCIO 1

// let idade1 = Number(prompt("DIgite sua idade"))

// if(idade1<18){
//     console.log("Você é menor de idade")
// }
// else{
//     console.log("Você é maior de idade")
// }

//EXERCÍCO 2

// let numero2 = Number(prompt("Escreva um numero:"))

// if(numero2<0){
//     console.log("Esse número é negativo")
// }
// else if(numero2>0){
//     console.log("Esse número é positivo")
// }
// else{
//     console.log("Zero é um número neutro")
// }

//EXERCÍCIO 3

// let nota3 = Number(prompt("Digite a nota:"))

// if(nota3>=60){
//     console.log("Aprovado")
// }
// else{
//     console.log("Reprovado")
// }

//EXERCÍCIO 4

// let numero4 = Number(prompt("Escreva um numero:"))

// if(numero4<0){
//     console.log("Esse número é negativo")
// }
// else if(numero4>0){
//     console.log("Esse número é positivo")
// }
// else{
//     console.log("Zero é um número neutro")
// }

//EXERCÍCIO 5

// let idade5 = Number(prompt("Digite sua idade:"))

// if(idade5>0 && idade5 <=12){
//     console.log("Você é criança")
// }
// else if(idade5>12 && idade5<18){
//     console.log("Você é adolescente")
// }
// else if(idade5>=18){
//     console.log("Você é adulto")
// }
// else{
//     console.log("Coloque um número positivo")
// }

//EXERCÍCIO 6

// let par6 = Number(prompt("Digite um número:"));
// let res6 = par6%2;

// if(res6 == 0){
//     console.log("O número é par")
// }
// else{
//     console.log("O número é impar")
// }

//INTERMEDIÁRIO

//EXERCÍCIO 1

// let calc1=Number(prompt("Digite o primeiro número:"))
// let calc2=Number(prompt("Digite o segundo número:"))
// let oper=prompt("Escolha a operação: (+ - * /)")

// if(oper=="+"){
//     let calculadora = calc1+calc2
//     console.log(calculadora)
// }
// else if(oper=="-"){
//     let calculadora = calc1-calc2
//     console.log(calculadora)
// }
// else if(oper=="*"){
//     let calculadora = calc1*calc2
//     console.log(calculadora)
// }
// else if(oper=="/"){
//     let calculadora = calc1/calc2
//     console.log(calculadora)
// }
// else{
//     console.log("Escolha um dos simbulos apresentados")
// }

//EXERCÍCIO 2

// let maior1 = Number(prompt("Digite o primeiro número"))
// let maior2 = Number(prompt("Digite o segundo número"))
// let maior3 = Number(prompt("Digite o terceiro número"))

// if(maior1>maior2 && maior1>maior3){
//     console.log(maior1)
// }
// else if(maior2>maior1 && maior2>maior3){
//     console.log(maior2)
// }
// else{
//     console.log(maior3)
// }

//EXERCÍCIO 3

// let preco3 = Number(prompt("Digite o valor:"))

// if(preco3>100){
//     let desconto = preco3/10
//     let final = preco3-desconto
//     console.log(final)
// }
// else{
//     console.log(preco3)
// }

//EXERCÍCIO 4

// let usuario = prompt("Digite o usuario:")
// let senha = Number(prompt("Digite a senha"))

// if(usuario == "admin" && senha == 1234){
//     console.log("Acesso libeirado")
// }
// else{
//     console.log("Acesso negado")
// }

//DIFÍCIL

//EXERCÍCIO 1

// let valorCompra = Number(prompt("Digite o valor:"))

// if (valorCompra>100){
//     console.log("Frete gratis")
// }
// else if (valorCompra<=100 && valorCompra>=50){
//     console.log("Frete 10 reais")
// }
// else{
//     console.log("Frete 20 reais")
// }

//EXERCÍCIO 2

// let idade = Number(prompt("Digite sua idade"))
// let temConvite = Number(prompt("Digite 1 se tem convite ou 0 se não tiver"))

// if(idade>=18 || temConvite==1){
//     console.log("Libeirado")
// }
// else{
//     console.log("Barrado")
// }

//EXERCÍCIO 3

// let mencao = Number(prompt("Digite sua nota 0-100:"))

// if(mencao>=90 && mencao<=100){
//     console.log("A")
// }
// else if(mencao>=80 && mencao<=89){
//     console.log("B")
// }
// else if(mencao>=70 && mencao<=79){
//     console.log("C")
// }
// else if(mencao>=60 && mencao<=69){
//     console.log("D")
// }
// else if(mencao<60){
//     console.log("F")
// }
// else{
//     console.log("Digite uma nota entre 0-100")
// }

//EXERCÍCIO 4

// let peso = Number(prompt("Digite seu peso:"))
// let altura = Number(prompt("Digite sua altura:"))

// let altura2 = altura * altura
// let imc = peso/altura2

// if(imc<18){
//     console.log("Está abaixo do peso");
    
// }

// else if(imc>=18 && imc<25){
//     console.log("Está normal"); 
// }

// else if(imc>=25 && imc<30){
//     console.log("Está sobrepeso");
    
// }
// else{
//     console.log("Está obeso");
    
// }

//EXERCÍCIO 5

let estoque = Number