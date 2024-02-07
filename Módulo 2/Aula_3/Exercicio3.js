/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

let sorteio = [];

for (let i = 0; i < 6; i++) {
  let novoNumero;
  do {
    novoNumero = Math.floor(Math.random() * 60) + 1;
  } while (sorteio.includes(novoNumero));
  sorteio.push(novoNumero);
}

console.log(sorteio);
