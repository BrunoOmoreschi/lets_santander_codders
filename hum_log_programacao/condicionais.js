//Ex. de uso de booleano, mas sem o ==:

//Alto infere o tipo da variavel: Booleano
let estaSol = false

//Se liga que nesse condicional não é declarado que esse booleano é true para que execute o cod.
if (estaSol){
    console.log("Vou para a praia!")
}

/*Truthy e Falsy
Além do true e do false, o JS aceita outras informações que não são booleanos e os interpreta como se fosse true ou false. Esses casos chamamos de truthy e falsy. Por exemplo, o JavaScript interpreta os seguintes valores como falso:

0
'' ou ""
null
undefined
NaN

Todos os demais são interpretados como verdadeiro. Alguns exemplos de truthy:

[]
{}
function(){}

Uma utilidade dessa característica é verificar se uma variável está definida antes de usá-la. Assim evitando erro. */
