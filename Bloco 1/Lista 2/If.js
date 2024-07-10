// Calcula se A + B é maior, menor ou igual a C

const leia = require('readline-sync')

let vA;
let vB;
let vC;

vA = leia.questionFloat("Insira o valor de A: ")
vB = leia.questionFloat("Insira o valor de B: ")
vC = leia.questionFloat("Insira o valor de C: ")

if (vA+vB > vC){
    console.log("A soma dos dois primeiros valores é maior que o terceiro")
} else if (vA+vB < vC){
    console.log("A soma dos dois primeiros valores é menor que o terceiro")
} else{
    console.log("A soma dos dois primeiros valores é igual ao terceiro")
}
