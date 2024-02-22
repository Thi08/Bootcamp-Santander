/*
    Escreva uma função para calcular o fatorial de um número.
    Ex: n * (n-1) * (n-2) *...*1
*/

function calculaFatorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  return numero * calculaFatorial(numero - 1);
}

console.log(calculaFatorial(5));

