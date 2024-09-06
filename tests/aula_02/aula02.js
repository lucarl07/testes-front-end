export const divisao = (dividendo, divisor) => {
  if (divisor === 0) {
    throw new Error("Não é possível dividir um número por 0.");
  }
  return dividendo / divisor;
}
