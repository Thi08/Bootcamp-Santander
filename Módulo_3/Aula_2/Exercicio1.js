// Vocês deverão implementar uma calculadora simples, contendo as 4 operações básicas;

// REQUISITOS:

// Quando a calculadora for instanciada, deverá receber 3 argumentos (um número qualquer, uma operação a ser realizada e um segundo número);

// Vocês precisam validar se os argumentos recebidos são válidos;

// A partir disso, demonstram o uso de sua calculadora através do terminal, executando seu script;

class Calculator {
  Number1;
  Operator;
  Number2;

  constructor(numero1, operador, numero2) {
    if (
      typeof numero1 === Number &&
      typeof numero2 === Number &&
      numero2 !== 0
    ) {
      throw new Error("Números inválidos");
    }
    if (!["+", "-", "*", "/"].includes(operador)) {
      throw new Error("Operação inválida");
    }

    this.Number1 = numero1;
    this.Number2 = numero2;
    this.Operator = operador;
  }

  calculate() {
    if (this.Operator === "+") return this.Number1 + this.Number2;
    if (this.Operator === "-") return this.Number1 - this.Number2;
    if (this.Operator === "*") return this.Number1 * this.Number2;
    if (this.Operator === "/") return this.Number1 / this.Number2;
  }
}

const A = new Calculator(10, "*", 2);
const B = new Calculator(5, "-", 2);
const C = new Calculator(12, "+", 2);
const D = new Calculator(20, "/", 2);

console.log(A.calculate());
console.log(B.calculate());
console.log(C.calculate());
console.log(D.calculate());
