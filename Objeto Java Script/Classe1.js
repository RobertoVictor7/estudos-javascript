class lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l =>{
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new lancamento ('Salario', 4500)
const contaDeLuz = new lancamento ('Luz', -220)
const contaDeAgua = new lancamento ('Agua', -300)

const contas = new CicloFinanceiro (6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua)
console.log(contas.sumario())
