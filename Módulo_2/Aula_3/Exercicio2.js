/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos), que contém nome, nota1 e nota2. Use o for para percorrer esse array e calcular a média das duas notas de cada aluno. Ao final, imprimir o nome do aluno e a sua média
*/

const listaDeAlunos = [
  { nome: "João", notas: [8, 7, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9, 1, 5] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];

for (const { nome, notas } of listaDeAlunos) {
  const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  console.log(`Nome do aluno: ${nome}, média: ${Math.round(media)}`);
}