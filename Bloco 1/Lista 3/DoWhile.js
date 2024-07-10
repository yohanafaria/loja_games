// Lê os numeros inteiros até que o zero seja digitado
// Depois mostra a soma de todos os numeros positivos inseridos

const leia = require("readline-sync")

let numero;
let soma = 0;

do {
    numero = leia.questionInt("Insira um número inteiro: \n(digite 0 para sair)")
    if (numero > 0){
        soma += numero
    }
}
while (numero != 0)    
console.log("A soma dos numeros positivos é: " + soma) 