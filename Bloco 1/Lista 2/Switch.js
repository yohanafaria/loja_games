
const leia = require('readline-sync')

let lanche;
let quantidade;

lanche = leia.questionInt("Escolha seu lanche: \n1)Cachorro-quente\n2)X-Salada\n3)X-Bacon\n4)Bauru\n5)Refrigerante\n6)Suco de laranja\n")
quantidade = leia.questionInt("Quantos você deseja?\n")

switch(lanche){
    case 1:
        console.log("O lanche escolhido foi cachorro quente e o valor total da sua conta é: R$" + (quantidade*10))
        break
    case 2:
        console.log("O lanche escolhido foi X-Salada e o valor total da sua conta é: R$" + (quantidade*15))
        break
    case 3:
        console.log("O lanche escolhido foi X-Bacon e o valor total da sua conta é: R$" + (quantidade*18))
        break
    case 4:
        console.log("O lanche escolhido foi Bauru e o valor total da sua conta é: R$" + (quantidade*12))
        break
    case 5:
        console.log("O lanche escolhido foi Refrigerante e o valor total da sua conta é: R$" + (quantidade*8))
        break
    case 6:
        console.log("O lanche escolhido foi Suco de laranja e o valor total da sua conta é: R$" + (quantidade*13))
        break
    default:
        console.log("Opção inválida!")
    }