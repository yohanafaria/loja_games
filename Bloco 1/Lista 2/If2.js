// Mostra se o número e par ou ímpar, positivo ou negativo.

const leia = require('readline-sync')

let num;

num = leia.questionInt("Insira um número inteiro: ")

if (num % 2 == 0 && num >= 0) {
    console.log("O número " + num + " é par e positivo!")
}else if (num % 2 != 0 && num > 0) {
    console.log("O número " + num + " é ímpar e positivo!")
}else if (num % 2 !=0 && num < 0) {
    console.log("O número " + num + " é ímpar e negativo!")
}else {
    console.log("O número " + num + " é par e negativo!")
}
