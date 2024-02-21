let notas = []

notas.push(7)
notas.push(8)
notas.push(6)
notas.push(10)
notas.push(9)
notas.push(7)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const notaFinal = notas[i];
    soma = soma + notaFinal
}

console.log(soma/notas.length)