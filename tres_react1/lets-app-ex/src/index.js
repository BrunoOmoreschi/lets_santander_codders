import React from 'react';
import ReactDOM from 'react-dom';
//Organizar componentes em apps separados e colocar nessa pasta
//import App from './components/App'; 
//import App2 from './components/App2'; 
//Aqui se importa a lista e os itens que vamos pegar de lá.
//import {Lista, Item} from './components/App2'
//Aqui o import do formulário
import Formulario from './components/App3'

//Abaixo é para mostrar o formulário na app3
ReactDOM.render(
  <React.StrictMode>
    <>
   <Formulario></Formulario>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);


/*
//Sinceramente eu ainda colocaria esses itens num vetor...
//Abaixo é para mostrar a lista no app2
ReactDOM.render(
  <React.StrictMode>
    <Lista>
      <Item key={999} id={999} completo={false}>
        "TEXTO Q QUERO MOSTRAR"
      </Item>
      <Item key={998} id={998} completo={true}>
        "TEXTO Q QUERO MOSTRAR1"
      </Item>
    </Lista>
  </React.StrictMode>,
  document.getElementById("root")
);
*/
