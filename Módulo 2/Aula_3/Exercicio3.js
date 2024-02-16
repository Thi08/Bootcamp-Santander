/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

// let sorteio = [];

// for (let i = 0; i < 6; i++) {
//   let novoNumero;
//   do {
//     novoNumero = Math.floor(Math.random() * 60) + 1;
//   } while (sorteio.includes(novoNumero));
//   sorteio.push(novoNumero);
// }

// console.log(sorteio);

const listaDeAlunos = [
  { nome: "João", notas: [8, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Álvaro", notas: [10, 9] },
];

console.log(listaDeAlunos.sort( (a,b) => a.nome.localeCompare(b.nome)))
