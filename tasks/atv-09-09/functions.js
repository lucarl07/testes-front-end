export const primosAnteriores = (limite) => {
  const resultado = []

  for (let i = 2; i < limite; i++) {
    let isPrimo = true;

    for (let y = 1; y < i; y++) {
      let divisao = i / y;

      if (divisao != i && Number.isInteger(divisao)) {
        isPrimo = false
      }
    }

    if (isPrimo) {
      resultado.push(i)
    }
  }

  return resultado;
}

console.log(primosAnteriores(50))