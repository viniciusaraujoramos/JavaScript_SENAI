let lanchonete = prompt("Digite o nome da lanchonete:").toUpperCase()
let cliente = prompt("Digite o nome do cliente:")
let produto = prompt("Escolha se quer: Pastel - Hamburger - Batata").toLowerCase()
let quant = Number(prompt("Digite a quantidade de produtos:"))
let preco
let final

switch(produto){
    case "pastel":
        preco = 7
        final=quant*preco
        resposta()
        break
    case "hamburger":
        preco = 15
        final=quant*preco
        resposta()
        break
    case "batata":
        preco = 12
        final=quant*preco
        resposta()
        break
    default:
        console.log("Digite uma das opções do cardapio!")
}

function resposta(){
    console.log(`=====${lanchonete}=====`);
    console.log(`Cliente: ${cliente}`);
    console.log(`Produto: ${produto}`);
    console.log(`Preço unitário: R$${preco}`);
    console.log(`Quantidade: ${quant}`);
    console.log(`Valor final da compra: R$${final}`);

    console.log("Compra realizada com sucesso!")
    console.log("Obrigdo pela preferência.")   
}
