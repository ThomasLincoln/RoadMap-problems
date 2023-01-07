// Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média 
// final deste aluno. Considerar que a média é ponderada e que o peso das notas 
// é 2, 3 e 5. Fórmula para o cálculo da média final é:

const nota1 = parseFloat(prompt("Insira a nota 1:"));
const nota2 = parseFloat(prompt("Insira a nota 2:"));
const nota3 = parseFloat(prompt("Insira a nota 3:"));

const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 3;
console.log(media.toFixed(2));