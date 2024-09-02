import { areaQuadrado, listaFrutas } from "./index.js";

test("Verifica área do quadrado", () => {
  expect(areaQuadrado(5)).toBe(25);
  expect(areaQuadrado(10)).toBe(100);
  expect(areaQuadrado(1.23)).toBe(1.5129);
});

test("Comparação de nomes", () => {
  expect("igor").toBe("igor");
  expect("igor").not.toBe("alves");
  expect("igor").toEqual("igor");
});

test("Verifica se tem genipapo", () => {
  expect(listaFrutas).toContain("genipapo");
});