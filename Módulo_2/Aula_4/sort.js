const atletas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

//Utilize o método "sort" para ordenar a lista de atletas em ordem crescente de peso.

atletas.sort((a, b) => a.peso - b.peso);

console.log(atletas);

//Utilize o método "sort" novamente para ordenar a lista de atletas em ordem decrescente de altura.

atletas.sort((a, b) => b.altura - a.altura);

console.log(atletas);

//Utilize o método "sort" mais uma vez para ordenar a lista de atletas em ordem alfabética de nome.

atletas.sort((a, b) => a.nome.localeCompare(b.nome));

console.log(atletas);
