// Elabore um algoritmo que leia quatro valores.
// A seguir, calcule e mostre a diferença do produto entre n1 e n2 pelo produto entre n3 e o n4. 

const leia = require('readline-sync')

let n1;
let n2;
let n3;
let n4;

n1 = leia.questionFloat("Informe o primeiro valor: ")
n2 = leia.questionFloat("Informe o segundo valor: ")
n3 = leia.questionFloat("Informe o terceiro valor: ")
n4 = leia.questionFloat("Informe o quarto valor: ")

diferencaProduto = (n1*n2)-(n3*n4)

console.log("A diferença é " + diferencaProduto)