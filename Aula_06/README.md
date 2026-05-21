# FUNÇÕES
Material produzido nas aulas de JavaScript no Senai SP - São Caetano do Sul

## Funções nativas do Javascript
Essas funções ajudam na limpeza do codigo evitando repetição

## MAP
    
```js
    //  -> percorre uma lista e cria uma nova lista com base em uma condição
    let numeros = [1, 2, 3, 4];
    let numerosDobrados = numeros.map(function(num){
        return num * 2;
    })
    console.log(numerosDobrados)
```
## FILTER 

```js
    //-> Filtra os elementos de uma lista  com base em uma condição
    let numeros = [5, 10, 15, 20];
    let maiorQueDez = numeros.filter(num => num > 10);
    console.log(maiorQueDez)
```

## REDUCE 

```js
    //-> Reduz os valores de um array para um único valor
    let numeros = [1, 2, 3, 4]
    let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0)
```

## FIND

```js
    //-> Retorna o primeiro elemento que atende a uma condição
    let produtor = [
        {id:1, nome: "Teclado", preco: 50},
        {id:2, nome: "Mouse", preco: 30}
    ]
    let item = produtos.find(produto => produto.id ===2);
    console.log(item)
```

## SPLIT 

```js
    //-> Divide uma string em partes, transformando em uma lista
    let frase = "JS é muito bom!"
    let palavras = frase.split(" ")
    console.log(palavras)
```

## TRIM 

```js
    //-> remove espaços no inicio e final de uma string
    let nome = "  João  "
    let nomeLimpo = nome.trim()
    console.log(nome)
```

## INCLUDES 

```js
    //-> Verifica se existe um valor dentro de uma lista ou string
    let frutas = ["maçã", "banana"]
    let frutaExiste = frutas.icludes("banana")
    console.log(frutaExiste)
```

## toLowerCase E toUpperCase

```js
    let minusculo = prompt("Digite seu nome:").toLowerCase()
    // -> Transforma todo o texto em minúsculo
    let maiusculo = prompt("Digite seu nome:").toUpperCase()
    // -> Transforma todo o texto em maiúsculo
```

## FOREACH 

```js
    //> Percorre todos os elementos do array
    let nomes = ["Pedro", "Jão", "Beatriz"]
    nomes.forEach(nome => console.log("Seu nome é: " + nome))
```

## SOME 

```js
    //-> Verifica se pelo menos um item da lista atende a condião
    let numeros = [1, 3, 5, 8]
    let temPar = numeros.some(num => num % 2===0)
    console.log(temPar)
```

## EVERY 
```js
    -> Verifica se TODOS os elementos da lista atendem a uma condição
    let todosPares = numeros.every(num=> num % 2 ===0)
    console.log(todosPares)
```

## SORT 

```js

    -> Ordena os elementos de uma lista
    let numeros = [3, 10, 5, 2, 4]
    let letras = ["c", "a", "x", "h"]
    letras.sort()
    console.log(letras)
    numeros.sorte((a,b)=> a - b)
    console.log(numeros)
```

## REVERSE 

```js
    //->  Inverte a ordem de um array
    numeros.reverse()
    console.log(numeros)
```

## JOIN 
```js
    // -> Junta os elementos de um array em uma string
    let palavras = ["JS", "é", "muito", "bom"]
    let frase = palavras.join(" ")
    console.log(frase)
```

## PUSH E POP
```js
    // -> Adicionar elementos no final do array
    // -> Remover elementos no final do array
    let lista = ["A", "B"]
    lista.push("C")
    console.log(lista)
    lista.pop()
    console.log(lista)
```

## SHIFT E UNSHIFT
```js
    // -> Remover elementos no inicio do array
    // -> Adicionar elementos no inicio do array
    let lista = ["B", "C"]
    listal.unshift("A")
    console.log(lista)
    lista.shift()
    console.log(lista)
```

## SLICE 
```js
    // -> Cria uma cópia de uma parte da lista
    /*
        array.slice(inicial, final)
        inicial -> Once começa a copiar o array
        final -> Onde para (não inclui a posição final [indíce / index])
    */
   let numeros = [1,2,3,4]
   let copia = numeros.slice(1,3)
   console.log(copia)
```

## SPLICE 
```js
    // -> Remove ou adiciona elementos em qualquer posição
    /*
    array.splice(indice,count,item1, ..., itemX)
    indice -> posição
    count -> número de itens retirados
    item -> item a ser adicionado
    */
    let numeros = [1,2,3,4]
    numeros.splice(1,1)
    console.log(numeros)

    let frutas = ["Banana", "Laranja", "Maçã", "Manga"]
    fruta.splice(0,3,"Limão", "Kiwi")
    console.log(frutas)

    let frutas = ["Banana", "Laranja", "Maçã", "Manga"]
    fruta.splice(2,0,"Limão", "Kiwi")
    console.log(frutas)

```

## REPLACE
```js
    //-> Sbstitui uma parde da strig
    let texto = "Olá mundo!"
    let novoTexto = texto.replace("mundo", "cliente")
    console.log(novoTexto)
```

## IF Ternário
```js
    // -> Simplificação do IF
    let resposta = (idade > 18) ? "maior de idade" : "menor de idade";
    // IF ?
    // ELSE :
    let resposta = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";
    // ELSE IF ? () :
```