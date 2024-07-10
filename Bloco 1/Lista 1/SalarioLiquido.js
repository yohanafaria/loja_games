// Calcula o valor do salário líquido de um funcionário, após eventuais descontos e acréscimos

const leia = require('readline-sync')

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos; 

salarioBruto = leia.questionFloat("Informe seu salário bruto: ")
adicionalNoturno = leia.questionFloat("Informe o adicional noturno: ")
horasExtras = leia.questionFloat("Agora, o valor de suas horas extras: ")
descontos = leia.questionFloat("Por fim, informe, se houver, valores a descontar: ")

salarioLiquido = (salarioBruto+adicionalNoturno+(horasExtras*5)-descontos)

console.log("O valor do seu salário líquido é R$" + salarioLiquido)