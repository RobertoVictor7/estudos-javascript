const valores = [7.7, 8.9, 6.3, 9.2]
             //  (0)  (1)  (2)  (3)
console.log(valores[0], valores [3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //mostra quantos elementos tem no array

valores.push({id:3}, false, null, 'texto') //adiciona itens ao array
console.log(valores)

console.log(valores.pop()) // tira o ultimo valor do array

console.log(typeof valores)