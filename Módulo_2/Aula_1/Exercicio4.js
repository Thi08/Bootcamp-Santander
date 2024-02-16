/*
Crie um algoritmo que, dada uma variável, que recebe o valor de um CPF com formatação, remova essa formatação e armazene esse valor sem formatação, como um 'number'.
*/

function removerFormatacaoCPF(cpf) {
  const cpfSemFormatacao = cpf.replace(/\D/g, '');
  const cpfConvertido = parseInt(cpfSemFormatacao, 10);

  return cpfConvertido;
}

const cpf = "123.456.789-09";
const cpfSemFormatacao = removerFormatacaoCPF(cpf);


console.log("CPF transformado em número:", cpfSemFormatacao);

