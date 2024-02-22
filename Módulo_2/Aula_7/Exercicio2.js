/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

function fibonacci(numero) {
  if (numero === 0) return [0];
  if (numero === 1) return [0, 1];
  let resultado = [0, 1];
  for (let i = 2; i < numero; i++) {
    resultado.push(resultado[i - 1] + resultado[i - 2]);
  }
  return resultado;
}

console.log(fibonacci(2));


function fibonacciRecursivo(numero) {
  if (numero < 2) return numero;

  return fibonacciRecursivo(numero - 1) + fibonacciRecursivo(numero - 2);
}