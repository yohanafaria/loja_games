// Calcula o valor final do salário, com o abono

const leia = require('readline-sync');
let bruto;
let abono;
bruto = leia.questionFloat("\nPor favor, informe seu salário:");
abono = leia.questionFloat("Agora, insira o valor do seu abono: "); 
console.log("O valor do seu salário será: " + (bruto+abono))