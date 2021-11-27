// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario:{
    nome: 'Raul',
    idade: 56,
  },
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome:'Ana',
    idade: 42
  }]
}

carro.proprietario.idade = 28
console.log(carro)