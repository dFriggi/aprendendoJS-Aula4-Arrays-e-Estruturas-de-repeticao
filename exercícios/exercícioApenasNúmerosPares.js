//exercício para imprimir números pares de um determinado array de números
let numeros = [54,2,3,4,5,87,92,74,9]

for(let index = 0; index <= 10; index++) {
    let pares = numeros[index]
    if(pares % 2 === 0)
    console.log(pares)
}