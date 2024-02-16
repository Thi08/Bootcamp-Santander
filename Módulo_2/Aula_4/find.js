const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

//Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.

const maximo10 = lugares.find((lugar) => lugar.capacidade >= 10);

console.log(maximo10);

//Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.

const maximo25 = lugares.find((lugar) => lugar.capacidade >= 25);

console.log(maximo25);

//Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.

const maximo40 = lugares.find((lugar) => lugar.capacidade >= 40);

console.log(maximo40);
