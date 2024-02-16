/*
    Crie um algoritmo que receba os três lados de um triângulo e imprime "Equilátero" se todos os lados forem iguais, "Isósceles" se dois lados forem iguais, ou "Escaleno" se todos os lados forem diferentes.
*/

const lados = [3,4,5]

if (lados[0] === lados[1] === lados[2]){
  console.log("Equilátero")
} else if (lados[0] !== lados[1] !== lados[2]){
  console.log("Isósceles")
} else{
  console.log("Escaleno")
}