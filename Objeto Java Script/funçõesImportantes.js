const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'DataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2020'
})

pessoa.DataNascimento = '01/01/2019'
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))

