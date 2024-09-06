import { divisao } from "./aula02.js";

test("Verifica se o segundo argumento é zero", () => {
  expect(() => divisao(10, 0)).toThrow(Error)
  expect(() => divisao(10, 0)).toThrow("Não é possível dividir um número por 0.")
})