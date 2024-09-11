import { 
  obterNumerosPares, 
  ordenarStrings, 
  contarVogaisDaString 
} from "./index.js"

test("Obter números pares de uma lista", () => {
  expect(obterNumerosPares(1, 2, 3, 4, 5, 6)).toStrictEqual([2, 4, 6])
  expect(obterNumerosPares(-4, -5, -8, -9, -16)).toStrictEqual([-4, -8, -16])
  expect(obterNumerosPares(4, 4.02, 4.19)).toStrictEqual([4])
})

test("Ordenar strings em ordem alfabética", () => {
  expect(ordenarStrings('Olá', 'Mundo', 'Alô'))
    .toStrictEqual(['Alô', 'Mundo', 'Olá']);

  expect(ordenarStrings('Abb', 'Acc', 'Aaa', 'Aba', 'Abc'))
    .toStrictEqual(['Aaa', 'Aba', 'Abb', 'Abc', 'Acc']);

  expect(ordenarStrings('12', '100', '110'))
    .toStrictEqual(['100', '110', '12']);
})

test("Obter o número de vogais de uma string", () => {
  expect(contarVogaisDaString("Trabalho")).toBe(3)
  expect(contarVogaisDaString("QWRTYP")).toBe(0)
  expect(contarVogaisDaString("AaAaAaAa")).toBe(8)
})