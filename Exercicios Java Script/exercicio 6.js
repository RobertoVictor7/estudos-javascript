function inverte(a) {
  if (a == true ) 
  console.log(false)
  else if (a == false)
  console.log(true)
  else if (a >= 0 )
  console.log(`-${a}`)
  else if (a < 0)
  console.log(Math.abs(a))
}

inverte(-5)