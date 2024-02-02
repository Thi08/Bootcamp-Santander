/*
Crie um algoritmo que, dada uma variável, que recebe o valor de um CPF com formatação, remova essa formatação e armazene esse valor sem formatação, como um 'number'.
*/

function removerFormatacaoCPF(cpfFormatado) {
  const cpfSemFormatacao = cpfFormatado.replace(/\D/g, '');
  const cpfComoNumero = parseInt(cpfSemFormatacao, 10);

  return cpfComoNumero;
}

const cpfFormatado = "123.456.789-09";
const cpfSemFormatacao = removerFormatacaoCPF(cpfFormatado);

console.log("CPF sem formatação como número:", cpfSemFormatacao);
