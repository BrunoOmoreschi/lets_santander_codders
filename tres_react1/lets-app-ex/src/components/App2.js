import React from 'react';


//Aqui exemplo de lista
//Não sei não.. nos metodo da S. Ocean vc tem uma forma mais json... parece que é mais alinhada com o bkend.. 
class Lista extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      //Esses booleanos no fim server para serem chamados e definirem estilo riscado ou não... é como uma todoList.
      { id: 1, nome: "item1", completo: false },
      { id: 2, nome: "item2", completo: false },
      { id: 3, nome: "item3", completo: true },
      { id: 4, nome: "item4", completo: false },
    ];
  }

  render() {
    return (
      //Exemplo de mapeamento de listas no state ao invez de criar uma var com vetor.
      //Ordenamento feito não mão, bem raiz, quase cringe kkkk
      //Na linha de baixo está o que vai ser exibido, no caso apenas o nome.
      //"this.props.children" é para pegar itens que estão sendo passados por quem chama. Assim vc consegue fazer uma lista receber itens pela pg. que está chamando.
      //"React.Children.map("CONDIÇÃO A SER VERIFICADA: EX. this.props.children, child => child.type == Item ? child:null")" - restringe para pegar apenas a lista e não qq coisa que estiver dentro da tag lista na pg q chama
      <ul>
        {this.props.children}
        {this.state.map((item) => (
          <Item id={item.id} completo={item.completo}>
            {item.nome}
          </Item>
        ))}
      </ul>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Aqui é o ternario q verifica o booleano para saber se está feita ou não a tarefa. Legal que ele colocou uma string que completa o texto da linha de style...
    const textDecoration = this.props.completo ? "line-through" : "none";

    return (
      //Linha de style.. ela define, mas sem CSS...textDecoration vai depender do booleano.
      <li data-id={this.props.id} style={{ textDecoration }}>
        {this.props.children}
      </li>
    );
  }
}
//Esse export tb diz o que está disponivel para ser importado, se for mais de um tem q tirar o default
//export default Lista;
export {Lista, Item}







/*
class App2 extends React.Component {
  constructor (props){
    //A classe React.Component (da propria biblioteca já usa o props)
    super(props)
  }
  render (){
    return (
      //Aqui podemos escrever os jsx e colocar o HTML do componente diretão aqui no js.
      //Inclusive já colocando as chamadas de estilo
    <div className="Box">
      
    </div>

    )
  }
}


//Não esquecer de devolver a classe...
export default App2
*/