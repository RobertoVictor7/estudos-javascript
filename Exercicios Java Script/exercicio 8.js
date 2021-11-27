function multiplicar(v1, v2) {
  let resultado = 0
// a otimização feita para diminuir a quantidade de chamadas recursivas pode ser realizada aqui para diminuir a quantidade de loops
for (let i = 0; i < v2; i++)
resultado += v1
console.log(resultado)
}

multiplicar(5,5)