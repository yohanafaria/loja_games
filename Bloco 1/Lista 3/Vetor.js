// Dado um vetor que possua 10 numeros inteiros e não repetidos, 
// o programa irá pesquisar dados no vetor, onde o usuário irá digitar
// um numero e o programa exibirá a posição deste no vetor, ou, caso não exista,
// exibirá a mensagem "Não foi encontrado!"

const leia = require('readline-sync')

let vetorInteiros = new Array(9);
let numeroSolicitado;
let posicao;

for(let indice = 0; indice <= 9; indice++){
    vetorInteiros[indice] = leia.questionInt("Digite o " + (indice + 1) + "º numero inteiro: ")
    }

numeroSolicitado = leia.questionInt("Digite qual número você está buscando: ")
posicao = vetorInteiros.indexOf(numeroSolicitado)
if (posicao !== -1) {
    console.log("O numero " + numeroSolicitado + " está na posição: " + vetorInteiros[posicao])
} else {
    console.log("O numero " + numeroSolicitado + " não foi encontrado!")
}

