const produtos = [ 
  { nome: 'notebook', preco: 2499, fragil: true},
  { nome: 'Ipad Pro', preco: 4199, fragil: true},
  { nome: 'Copo de Vidro', preco:12.49, fragil: true},
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))