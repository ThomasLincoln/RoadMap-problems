// Escreva um algoritmo para ler 2 valores e se o segundo valor informado for 
// ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser 
// aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido 
// pelo segundo valor lido.

const a = parseInt(prompt("insira o numero"))
let b = 0;
while(!b){
    b = parseInt(prompt("insira o numero"));
}

console.log(a/b)