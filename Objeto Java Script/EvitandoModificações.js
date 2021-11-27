// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

// Object.seal
const pessoa = {nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

// Object.freeze = Selado + valores constantes