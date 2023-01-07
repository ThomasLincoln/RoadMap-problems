// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o 
// percentual de reajuste. Calcular e escrever o valor do novo salário.

const salAtual = parseFloat(prompt("insira o salario"));
const reajuste = parseFloat(prompt("insira a porcentagem de aumento"));

const novoSalario = salAtual + ((salAtual/100) * reajuste)
console.log(novoSalario)
