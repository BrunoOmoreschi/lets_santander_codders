//Esse aqui vai seguir a ordem de construção ensinada no curso da lets code. No curso da S.Ocean o app é apagado e os elementos são feitos por lá no index.
import React from "react";

//Reutilização da classe componente do proprio React
//Está criando um item da pg. como uma classe de objeto para que possamos reaproveitar se precisar.
class App extends React.Component {
  constructor(props) {
    //Necessário utilizar os contructor da classe mãe (React.Component)
    super(props);
    //aviso no constructor que tem 2 parametros, nome, que começa undefined e txtNome que é uma  variavel que vai carregar o texto digitado e entregar quando o botão salvar for clicado
    this.state = {
      nome: undefined,
      txtNome: "",
    };
  }
  //Arrow fun que vai pegar o que foi digitado e colocar na txtNome de acordo com o evento fornecido por quem chama.
  changeTxtNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  };

  //Função de verificação se já existe informação armazenada em cache, ou seja no cookie
  componentDidMount = () => {
    //Procura com getItem o 'nome' lá na sessionStorage e salva numa variavel aqui chamada nome.
    const nome = sessionStorage.getItem('nome')
    //Mas e se a parada estiver vazia? E se liga que ele não faz nda com isso até então..
    //legal q ele usou o mesmo nome para todas as var da mesma informação.. debugar é lindio...
    if (nome) this.setState({nome});
  }

  //Arrow fun que vai pegar o que foi digitado e colocar na nome de acordo com o evento fornecido por quem chama.
  persistTxtNome = () => {
    //setState é um metodo de alterção das variaveis que foram declaradas no constructor.
    this.setState({ nome: this.state.txtNome });
    //Essa linha aqui de baixo salva a informação no cache e no cookie. Assim podemos puxar ela para quando a pg. for criada na renderização.
    //Vamos salvar numa variavel nome o que está aqui no txtNome, é que essa linha diz.
    sessionStorage.setItem('nome', this.state.txtNome)
  };
  render() {
    //Por estranho que pareça é uma variavel constante que tem uma arrow fun dentro.. locão né ^^
    //Essa renderForm é para quando não há texto, veja a linha do return.
    const renderForm = () => {
      return (
        /*
        Essas div sem nome, sem estilo se chamam fragmentos.. não fiquei fã de usar coisas q não tem nome, não endereçaveis... 
        Nessa div tem os eventos e as funções. a primeira vai olhando onChange num elemento input e chamando a função changeTxtNom.
        A outra é um elemento button que onClick vai chamar a função persistTxtNome.
        */
        <>
          Nome: <input type="text" onChange={this.changeTxtNome} />
          <button onClick={this.persistTxtNome}>Salvar</button>
        </>
      );
    };
    
    //Essa linha é a que será exibida assim que o texto deixar de ser undefined, veja a linha do return abaixo.
    const renderText = () => <p>Olá {this.state.nome}</p>;
    
    //Aqui estamos chamando as funções acima criadas - iniciador de lógica.
    //É usada uma função ternaria pq dá problemas de this. Usando o this aqui e dentro das funções o JS fica locão e não sabe a que se refere mais.. this is this ou this is that...
    //Significa: Quando essa lógica for true ? "função se true" : "Função se false"
    return !this.state.nome ? renderForm() : renderText();
  }
}
//Encapsula e entrega para quem pediu.
export default App;

/*
O react tem um ciclo meio parecido com android, cria as telas quando chamado, destroi quando o usuario vai para outra pg. ou fecha aba...
Tb tem que ele só renderiza o que foi mudado... Funciona assim ele tem um copia e toda vez que tem diferênça entre ela e o que está na real ele autualiza aqui ou lá, dependendo 
da lógica. Assim o trafego é minimo e o esforço tb.
Como curiosidade o React foi desenvolvido pelo FaceBook...
*/


/*
Nesse estado vc tem uma caixa de texto que conforme vai sendo escrita ela já passa direto para o texto a ser mostrado abaixo.
Em alguns momentos eu curto isso... então vou salvar esse estado do cod. para usar depois.

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: "" };
  }
  changeNome = (evt) => {
    this.setState({ nome: evt.target.value });
  };
  render() {
    return (
      <>
        nome:{" "}
        <input type="text" value={this.state.nome} onChange={this.changeNome} />
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App;*/

