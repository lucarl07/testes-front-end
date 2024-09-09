export const primosAnteriores = (limite) => {
  const resultado = [];

  for (let i = 2; i < limite; i++) {
    let isPrimo = true;

    for (let y = 1; y < i; y++) {
      let divisao = i / y;

      if (divisao != i && Number.isInteger(divisao)) {
        isPrimo = false;
      }
    }

    if (isPrimo) {
      resultado.push(i);
    }
  }

  return resultado;
};

// console.log(primosAnteriores(50))

export const verificarObjeto = (pessoa) => {
  const atributos = ["nome", "idade", "pais", "endereço"];

  let temTodosAtributos = true;

  atributos.forEach((el) => {
    if (!pessoa.hasOwnProperty(el)) {
      temTodosAtributos = false;
    }
  });

  if (!temTodosAtributos) {
    return "Faltam atributos";
  } else {
    return "Objeto está completo";
  }
};

console.log(
  verificarObjeto(["nome", "idade", "pais", "endereço"])
);
