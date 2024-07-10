const leia = require('readline-sync')

let v1;
let v2;
let operacao;

v1 = leia.questionFloat("Por favor, insira o primeiro valor: ")
v2 = leia.questionFloat("Por favor, insira o segundo valor: ")
operacao = leia.questionInt("Escolha o número referente a operação que deseja realizar:\n1)Soma\n2)Subtração\n3)Multiplicação\n4)Divisão\n")

switch (operacao){
    case  1:
        console.log ("O resultado é: " + (v1+v2) )
        break
    case  2:
        console.log ("O resultado é: " + (v1-v2) )
        break    
    case  3:
        console.log ("O resultado é: " + (v1*v2) )
        break
    case  4:
        console.log ("O resultado é: " + (v1/v2) )
        break
    default:
        console.log ("Opção inválida!")
}