const fruta = function (fruto){
 switch (fruto){
   case 'maçã':
     console.log('Não Vendemos essa Fruta Aqui.')
     break
    case 'kiwi':
      console.log('Estamos com escassez de kiwis')
      break   
    case 'melancia':
      console.log('Aqui está')
      break
    default:
      console.log('ERRO! fruta invalida')
 }
}

fruta('maçã')
