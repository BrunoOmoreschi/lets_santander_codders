//Essa é uma forma bem sitetica de nesting...
//Ex.:

//A função somarX vai receber um valor x e chamar a função y. A função y, vai pegar um valor y e chamar outra função => x+y
//Ao contrario agora: x+y, vai pegar o y fornecido na função do meio, e o x da primeira função e ir retornando tudo para as funções da direita para a esquerda
const somarX = (x) => (y) => x+y;

//Aqui forneço o y
const somar2 = somarX(2);

//Aqui forneço o x
console.log(somar2(5))