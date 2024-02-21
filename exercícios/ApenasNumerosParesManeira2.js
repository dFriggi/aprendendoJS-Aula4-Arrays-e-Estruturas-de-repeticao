const pares = []

for (let index = 0; index <= 10; index++) {
    const numero = index % 2 ===0
    if(numero){
    pares.push(index)
    }
}
console.log(pares)