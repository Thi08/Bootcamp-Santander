const lista1 = ["banana", "pera", "melancia"];
const lista2 = ["alface", "tomate", "rucula"];

//Utilize o método "concat" para mesclar a lista1 e lista2 em um novo array.

const lista = lista1.concat(lista2);

//Verifique o comprimento (length) do novo array para confirmar que os elementos foram mesclados corretamente.

console.log(lista.length);

//Tente utilizar o método "concat" com mais algumas listas, mesclando todas em uma só.

const lista3 = ["limao", "laranja", "acerola"];
const lista4 = ["pimenta", "pimentao", "alho"];

const listaFinal = lista.concat(lista3, lista4);

console.log(listaFinal.length);
