// Lê a idade de várias pessoas e mostra o total de pessoas com menos de 21 anos e o total com masi de 50 anos.
// Ao digitar uma idade negativa, a leitura deve ser finalizada.

const leia = require("readline-sync")

let idade;
let menos21 = 0;
let mais50 = 0;

idade = leia.questionInt("Insira a idade: ")

while (idade >= 0){
    if (idade < 21) {
        menos21++
    } else if (idade > 50) {
        mais50++
    }
    idade = leia.questionInt("Insira a idade: ")
}
console.log("O total de pessoas menores de 21 anos é de " + menos21 + " e o total de pessoas maiores de 50 é de " + mais50)
