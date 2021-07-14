//Serve para executar uma função e filtrar o vetor baseado nisso.
const vetor = [1,2,3,4,5,6,7,8,9,10];

//Aqui acontece a mágica, o .filter vai pegar a lógica entre parenteses e executar a cada item do vetor. Nesse caso verificar se o resto da divisão por 2 é zero, ou seja se é par.
//Se for ele vai construir um vetor chamado pares com esses items.
const  pares = vetor.filter(x => x%2 == 0);


//Prof of concept:
console.log(pares);
//Note que o vetor original não sofreu alterações.
console.log(vetor);