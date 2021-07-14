//Reduce
//Ex.:

const vetor = [ 1,2,3,4,5,6]

//Aqui vamos salvar em somatorio o valor de percurrer o vetor, salvando na var acumulador, a cada item, a logica da arrow fun (acumulador + item), obtendo o somatorio de todos os itens no fim.
//Se liga q o 0 (zero) é o indice inicial do "4".
const somatorio = vetor.reduce((acumulador, item)=> acumulador + item,0)

console.log(somatorio);