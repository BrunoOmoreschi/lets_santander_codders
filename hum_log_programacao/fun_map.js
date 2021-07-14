//Aula 10 - map de vetores

const vetor = ["10", "20", "30"];
//Estamos usando esse inline fun que não depende de nada, mas pega um parametro e manda para uma arrow fun que transforma usando o parseInt os strings em números. Tipo um .toString ou coisa desse tipo para converter...
const stringToInt = (x) => parseInt(x);

//Aqui está o pulo do gato: o .map do lado do vetor diz que é para fazer um 4 nesse vetor e aí chamamos uma função.
const vetorTwo = vetor.map(stringToInt);
console.log(vetorTwo);

const sqrd = (y) => y*y
const vertoSqrd = vetorTwo.map(sqrd)
console.log(vertoSqrd);