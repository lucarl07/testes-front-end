export const divisao = (dividendo, divisor) => {
  if (divisor === 0) {
    throw new Error("Não é possível dividir um número por 0.");
  }
  return dividendo / divisor;
}

export const cursos = ["Eletrotécnica", "Informática para Internet", "Mecânica Automotiva", "Moda", "Soldagem", "Torneraria"]

export const influencer = {
  nome: "Virgínia Fonseca",
  idade: 25,
  endereco: {
    cidade: "Goiânia",
    estado: "Goiás"
  },
  seguidores: 48000000,
  triguinho: false
}

export const maxAlunos = 30