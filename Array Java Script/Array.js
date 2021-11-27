console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //parametros inexistentes são considerados Undefined 

aprovados[3] = 'Paulo' // substituir elemento que já existe
aprovados.push('Abia') // adicionar elemento ao Array
console.log(aprovados.length) // quantidade de Itens no Array
console.log(aprovados)

aprovados.sort() // causa alteração diretamente no Array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos','Ana']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') // adiciona elementos em determinado indice ou remover elementos de array
console.log(aprovados)