// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 
// se forem compradas pelo menos 12. Escreva um programa que leia o número de 
// maçãs compradas, calcule e escreva o custo total da compra.

const macasCount = parseInt(prompt("Insira a quantidade de maçãs"))

if(macasCount >= 12){
    console.log(macasCount * 1)
}else{
    console.log(macasCount * 1.3)
}
