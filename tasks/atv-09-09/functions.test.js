import { primosAnteriores } from "./functions";

test(`Obter números primos da função "primosAnteriores"`, () => {
  const arrEsperada = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
  expect(primosAnteriores(50)).toEqual(arrEsperada)
  expect(primosAnteriores(13)).not.toContain(13)
})