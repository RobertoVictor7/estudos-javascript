function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop()
  return [primeiroElemento, ultimoElemento]
  }
  