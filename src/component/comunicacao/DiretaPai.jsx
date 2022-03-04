import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(props) {
  return (
    <div>
      <h2>Décimo Componente</h2>
      <DiretaFilho nome='Daniel' idade={20} sexo={true}/>
      <DiretaFilho nome='Gabriela' idade={15} sexo={false}/>
    </div>
  )
}

//Comunicação Direta: é passar do pai as informações para o filho via props.
//O filho recebe as informações {props.nome}, {props.idade}, {props.sexo}; o que se passar no pai reflete no filho. 