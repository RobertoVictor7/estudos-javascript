const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento a ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista1!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento a primeira posição do Array
console.log(pilotos)

// splice pode adicionar ou remeover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou novamente
console.log

const algunsPilotos1 = pilotos.slice(2) // novo Array (pega um pedaço do Array)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)