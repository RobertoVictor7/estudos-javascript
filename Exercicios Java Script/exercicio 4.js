/*Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
  exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function nomeDoMes(numero) {
  if(numero == 1)  {
  console.log("janeiro")  
  } else if(numero == 2) {
  console.log("fevereiro")
  } else if(numero == 3) {
    console.log("março")
  } else if(numero == 4) {
    console.log("Abril")
  } else if(numero == 5) {
    console.log("Maio")
  } else if(numero == 6) {
    console.log("Junho") 
  } else if(numero == 7) {
    console.log("Julho")
  } else if(numero == 8) {
    console.log("Agosto")
  } else if(numero == 9) {
    console.log("setembro")
  } else if(numero == 10) {
    console.log("Outubro") 
  } else if(numero == 11) { 
    console.log("Novembro")
  } else if (numero == 12) {
    console.log("Dezembro")
  } else {
    console.log("Por Favor Digite um numero de 1 a 12")}
  
}

nomeDoMes(12)