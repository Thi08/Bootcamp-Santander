/*
    Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/

const num1 = 20;
const num2 = 10;

const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multiplicacao = (x, y) => x * y;
const divisao = (x, y) => x / y;

function calculadora(operacao) {
  return function (x, y) {
    return operacao(x, y);
  };
}

console.log(calculadora(soma)(num1, num2));