function ex1(){
    console.log("=====EXERCÍCIO 1=====")

    for(let i=1; i<11; i++){
        console.log(i)
    }
}

function ex2(){
    console.log("=====EXERCÍCIO 2=====")

    let tabuada = Number(prompt("Digite um número para que eu possa gerar a tabuada:"))

    for (let tab = 1; tab<=10; tab++){
        let tabu = tabuada*tab
        console.log(tabu)
        
    }
}

function ex3(){
    console.log("=====EXERCÍCIO 3=====")

    let N = Number(prompt("Digite um número:"))
    let final = 0
    for(let i =1; i<=N; i++){
        final = final + i
        console.log(final);
        
    }
}

function ex4(){
    let par = 0
    let comp

    for(let i = 1; i <= 50; i++){
        par++
        comp = par%2
        if(comp == 0){
            console.log(par)
        }
    }
}
function ex5(){
    const randon = Math.random() * 100;
    let resposta = Number(prompt("Digite um numero de 1 a 100"));
    while(resposta != randon){
        
        resposta = Number(prompt("Digite outro número"));
    }
    console.log("Você acertou, o número era: " + randon)

}
function ex6(){
    
}
function ex7(){
    
}
function ex8(){
    
}
function ex9(){
    
}
function ex10(){
    
}
function ex11(){
    
}
function ex12(){
    
}
function ex13(){
    
}
function ex14(){
    
}
function ex15(){
    
}





// console.log("=====EXERCÍCIO 4=====")



// console.log("=====EXERCÍCIO 5=====")



// console.log("=====EXERCÍCIO 6=====")



// console.log("=====EXERCÍCIO 7=====")



// console.log("=====EXERCÍCIO 8=====")



// console.log("=====EXERCÍCIO 9=====")



// console.log("=====EXERCÍCIO 10=====")



// console.log("=====EXERCÍCIO 11=====")



// console.log("=====EXERCÍCIO 12=====")



// console.log("=====EXERCÍCIO 13=====")



// console.log("=====EXERCÍCIO 14=====")



// console.log("=====EXERCÍCIO 15=====")