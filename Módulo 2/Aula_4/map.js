const pessoas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

//Utilize o método "map" para criar um novo array de objetos que contenha somente o nome e o IMC (índice de massa corporal) de cada pessoa, sendo que o IMC é calculado pela fórmula peso / altura².

const IMCS = pessoas.map((pessoa) => {
  const imc = pessoa.peso / Math.pow(pessoa.altura, 2);
  return { nome: pessoa.nome, IMC: imc };
});

console.log(IMCS);
