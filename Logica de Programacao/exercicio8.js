// Ler um valor e escrever se é positivo, negativo ou zero

const numero = parseInt(prompt("Insira o valor: "))

if(numero > 0){
    console.log("numero positivo")
}else if(numero == 0){
    console.log(" e zero");
}else{
    console.log("numero negativo");
}
