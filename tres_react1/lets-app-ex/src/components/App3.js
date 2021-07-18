import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      linguagem: "JavaScript",
      tipo: "programador",
      dedico: true,
      bio: "",
    };

    //Método que salva o que foi digitado.
    this.handleSubmit = (event) => {
      //preventDefault é para impedir que a pg saia limpando tudo assim q houver modificação.
      event.preventDefault();
      //Curiosão, mostra no terminal o que foi colocado pelo user.
      //Então... é pq o prof. na aula não quis fazr um Create...não quis mandar essa info para uma lista usando sessionStore... aff...
      console.log(this.state);
    };

    //Função para atualizar o nome vindo do campo de texto.
    this.changeName = (event) => {
      this.setState({ nome: event.target.value });
    };

    this.changeSelect = (event) => {
      this.setState({ linguagem: event.target.value });
    };

    this.changeRadio = (event) => {
      this.setState({ tipo: event.target.value });
    };

    this.changeCheckbox = (event) => {
      this.setState({ dedico: event.target.checked });
    };

    this.changeBio = (event) => {
      this.setState({ bio: event.target.value });
    };
  }

  render() {
    return (
      
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              value={this.state.nome}
              onChange={this.changeName}
            />
          </label>
          <br />
          <label>
            Linguagem favorita
            <select value={this.state.linguagem} onChange={this.changeSelect}>
              <option>JavaScript</option>
              <option>Python</option>
              <option>C++</option>
            </select>
          </label>
          <br />
          <label>
            Sou:
            <input
              type="radio"
              checked={this.state.tipo == "programador"}
              onChange={this.changeRadio}
              value="programador"
            />{" "}
            Programador
            <input
              type="radio"
              checked={this.state.tipo == "estudante"}
              onChange={this.changeRadio}
              value="estudante"
            />{" "}
            Estudante
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.dedico}
              onChange={this.changeCheckbox}
            />{" "}
            Dedico 8h semanais aos estudos.
          </label>
          <br />
          <label>
            Bio:
            <textarea
              cols="50"
              value={this.state.bio}
              onChange={this.changeBio}
            />
          </label>
          <input type="submit" value="Salvar" />
        </form>
      </>
    );
  }
}

export default Formulario;
