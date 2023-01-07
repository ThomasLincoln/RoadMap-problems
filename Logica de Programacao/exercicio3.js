// Escreva um algoritmo para ler o número total de eleitores de um município, o número de 
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

// para isso podemos usar uma regra de 3
// parseInt converte texto para int


let brancos = parseInt(prompt("Votos em branco: "));
let nulos = parseInt(prompt("Votos em nulos: "));
let validos = parseInt(prompt("Votos em válidos: "));

const totalVotos = brancos + nulos + validos;

console.log(totalVotos)
const porcentageBrancos = ((100 * brancos)/totalVotos);
const porcentageNulos = ((100 * nulos)/totalVotos);
const porcentageValidos = ((100 * validos)/totalVotos);

console.log(porcentageBrancos, porcentageNulos, porcentageValidos);
