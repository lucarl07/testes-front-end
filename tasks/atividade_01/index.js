export const obterNumerosPares = (...numeros) => {
  return numeros.filter((num) => num % 2 == 0)
}

export const ordenarStrings = (...strings) => {
  return strings.sort()
}

export const contarVogaisDaString = (string) => {
  const letras = string.split("")
  let numeroVogais = 0

  letras.forEach((l) => {
    const letra = l.toUpperCase()

    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
      numeroVogais++
    }
  })
  
  return numeroVogais
}

// console.log(obterNumerosPares(1, 2, 3, 4, 5, 6))
// console.log(ordenarStrings("Abb", "Acc", "Aaa", "Aba", "Abc"))
// console.log(ordenarStrings("12", "100", "110"))
// console.log(contarVogaisDaString("Trabalho"))