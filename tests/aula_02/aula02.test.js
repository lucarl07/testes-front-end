import { divisao, cursos } from "./aula02.js";

test("Verifica se o segundo argumento é zero", () => {
  expect(() => divisao(10, 0)).toThrow(Error)
  expect(() => divisao(10, 0)).toThrow("Não é possível dividir um número por 0.")
})

test("Verifica se o curso de soldagem está ativo", () => {
  const fraseDoDia = "O sol está escaldante em Maceió!"
  expect(fraseDoDia).toContain("sol")
  expect(cursos).toContain("Soldagem")
})