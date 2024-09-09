import { primosAnteriores, verificarObjeto } from "./functions";

test(`Obter números primos da função "primosAnteriores"`, () => {
  const arrEsperada = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  expect(primosAnteriores(50)).toEqual(arrEsperada);
  expect(primosAnteriores(13)).not.toContain(13);
});

test(`Testar se "verificarObjeto" valida objetos corretamente`, () => {
  const pessoas = [
    {
      nome: "Luiz Carlos",
      idade: 17,
      pais: "Brasil",
      endereço: "Maceió - AL",
    },
    {
      nome: "Pedro Lucas",
      pais: "Brasil",
      endereço: "Maceió - AL"
    },
    {
      nome: "Cícero Amorim",
      idade: 17,
      pais: "Brasil",
      endereco: "Maceió - AL",
    },
  ]

  expect(verificarObjeto(pessoas[0])).toBe("Objeto está completo")
  expect(verificarObjeto(pessoas[1])).toBe("Faltam atributos")
  expect(verificarObjeto(pessoas[2])).not.toBe("Objeto está completo")
});
