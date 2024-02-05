/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em di
ante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salario = -1500;
let novoSalario;
let reajuste;

if (salario >= 0) {
  if (salario <= 1500) {
    reajuste = 0.2;
    novoSalario = salario * (1 + reajuste);
  } else if (salario <= 1700) {
    reajuste = 0.15;
    novoSalario = salario * (1 + reajuste);
  } else if (salario <= 2000) {
    reajuste = 0.1;
    novoSalario = salario * (1 + reajuste);
  } else if (salario > 2000) {
    reajuste = 0.05;
    novoSalario = salario * (1 + reajuste);
  }
} else {
  console.log("Valor inválido");
  return;
}

const aumento = novoSalario - salario;

console.log(`Valor do salário antigo: ${salario}`);
console.log(`Percentual do aumento ${reajuste * 100}%`);
console.log(`Valor do aumento: ${Math.ceil(aumento)}`);
console.log(`Valor do novo salário: ${Math.ceil(novoSalario)}`);
