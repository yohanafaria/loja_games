// Lê uma matriz 3x3 de numeros inteiros e mostra:
// Todos os elementos da diagonal principal e sua soma; e
// Todos os elementos da diagonal secundaria e sua soma.

const leia = require("readline-sync")

let somaPrincipal = 0
let somaSecundaria = 0
let matriz = new Array(3)

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    matriz[indiceLinha] = Array(3)
}

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++){
        matriz[indiceLinha][indiceColuna] = leia.questionInt("Digite o numero do elemento [" + indiceLinha + "][" + indiceColuna + "]: ")
    }
}
console.table(matriz)

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    somaPrincipal += matriz[indiceLinha][indiceLinha]
    somaSecundaria += matriz[indiceLinha][2 - indiceLinha]
}
console.log("A soma dos elementos da Diagonal principal é: " + somaPrincipal)
console.log("A soma dos elementos da Diagonal Secundária é: " + somaSecundaria)
