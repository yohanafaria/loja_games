// Lê 2 numeros inteiros, onde o primeiro deve ser menor que o segundo.
// Caso não seja, exibe uma mensagem na tela informando que o intervalo é inválido.
// No intervalo informado, deve exibir todos os numeros que são multiplos de 3 e 5.

const leia = require('readline-sync')

let numero1;
let numero2;
let cont;

numero1 = leia.questionInt("Insira um numero inteiro: ")
numero2 = leia.questionInt("Agora, insira um numero maior que o anterior: ")

if (numero1 >= numero2) {
    
    console.log("O intervalo é inválido!")
} else{
    console.log("No intervalo entre " + numero1 + " e " + numero2 + ":")
    for (cont = numero1; cont < numero2; cont++) {
        if (cont % 3 == 0 && cont % 5 == 0){
            console.log(cont + " é múltiplo de 3 e 5")
        }
    }
}