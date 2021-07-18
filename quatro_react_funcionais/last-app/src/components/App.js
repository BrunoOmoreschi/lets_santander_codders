//Para usar a função useState ["ESTADO", "FUN.SETeSTADO"] tem que importar
import React, {useState} from "react";


//Mano... o certo é usar componentes funcionais e não classes.. 
//Mas o curso passou esse tempo todo fazendo essa salada na minha cabeça pq tem pg. pra caramba que está assim com classes...
//Então se for fazer novo cria como comp. funcional ok?? Seja um eu futuro legal... eu tenho certeza que essa raiva toda já passou aí...
export default function App(){
  //Define o vetor com uma var e uma função de alterção dessa mesma var. É convenção esse nome de fun: set'nome-de-var'
  const [nome, setNome] = useState("Bruno");
  //Definição do que vai ser chamado acima como função de edição da var.
  const onClick = () => setNome("Moreschi");

  return <h1 onClick={onClick}>{nome}</h1>;
}
/*
export default function App(props) {
 return <>{props.children}</>;
}*/