const nome: string = "thiago";
const idade: number = 23;
const programador: boolean = true;
// const aleatorio:any = "aceita qualquer coisa"
// const aleatorio: boolean | number = true;
// const aleatorio: null | undefined = undefined;
const nomes: string[] = [];

nomes.push("teste", "teste2");

const nomesEIdades: Array<string | number> = [];

nomesEIdades.push("1", "teste");

const qualquerCoisa: any[] = [];
qualquerCoisa.push(1, "", true, {});

//----------------------------------------------

interface IPessoa {
  nome: string;
  idade: number;
}

const pessoas: IPessoa[] = [];
// pessoas.push("teste")

const pessoa: IPessoa = {
  nome: "teste",
  idade: 2,
};

pessoas.push(pessoa);

//----------------------------------------------
type Conta = {
  pessoa: IPessoa;
};

const conta:Conta = {
  pessoa
}

console.log(conta)
