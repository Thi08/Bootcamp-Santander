var pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

//Utilize o método "every" para verificar se todos os alunos têm idade maior ou igual a 18 anos.

const maiores = pessoas.every((pessoa) => pessoa.idade >= 18);

console.log(maiores);

//Utilize o método "every" novamente para verificar se todos os alunos têm nome com mais de 3 caracteres.

const nomesMaiores = pessoas.every((pessoa) => pessoa.nome.length > 3);

console.log(nomesMaiores);

//Utilize o método "every" mais uma vez para verificar se todos os alunos têm idade e nome definidos.

const valido = pessoas.every((pessoa) => pessoas.nome != '' && pessoas.idade != '');

console.log(valido)