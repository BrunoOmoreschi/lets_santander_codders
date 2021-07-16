//Factory Methods: Metodos de acesso a propriedades privadas.
//Ex.:
class Quadrado {
    constructor (lado, altura){
      //Propriedade privada
      let cor = "blue";
      //Propriedades comuns
      this.lado = lado
      this.altura = altura
      //Metodo secreto (só pq é estranhão) de acesso a p. privada
      this.getCor = () => (Quadrado.getCor())
    }
    
}

//Ex. de teste de criação
const Quadrado = new Quadrado (3,4)
//Ex. de invocação da função interna secreta q acessa a p. privada
console.log(Quadrado.getCor())