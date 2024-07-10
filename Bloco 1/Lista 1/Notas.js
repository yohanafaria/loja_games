// Calcula a média de um estudante e retorna se o mesmo foi aprovado ou não

const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4; 

n1 = leia.questionFloat("Informe a primeira nota: ")
n2 = leia.questionFloat("Informe a segunda nota: ")
n3 = leia.questionFloat("Informe a terceira nota: ")
n4 = leia.questionFloat("Informe a quarta nota: ")

media = (n1+n2+n3+n4)/4

if (media >= 7) {
    console.log("Parabéns, você foi aprovado com média " + media)
}else{
    console.log("Você foi reprovado com média " + media)
}
