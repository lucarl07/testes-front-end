import { divisao, cursos, influencer } from "./aula02.js";

test("Verifica se o segundo argumento é zero", () => {
  expect(() => divisao(10, 0)).toThrow(Error)
  expect(() => divisao(10, 0)).toThrow("Não é possível dividir um número por 0.")
})

test("Verifica se o curso de soldagem está ativo", () => {
  const fraseDoDia = "O sol está escaldante em Maceió!"
  expect(fraseDoDia).toContain("sol")
  expect(cursos).toContain("Soldagem")
})

test("Verificar se a propriedade triguinho existe no objeto influencer", () => {
  expect(influencer).toHaveProperty("triguinho", false)
  expect(influencer).not.toHaveProperty("BET")
})

test("Verificar se existem as propriedades-filho do endereço", () => {
  expect(influencer).toHaveProperty("endereco.cidade")
  expect(influencer).toHaveProperty("endereco.estado")
})