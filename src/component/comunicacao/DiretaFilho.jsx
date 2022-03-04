import React from "react";

export default function DiretaFilho(props) {
  return (
    <div>
      <span>{ props.nome } </span>
      <span>{ props.idade } </span>
      <span><strong>{ props.sexo? 'Masculino':'Feminino' }</strong></span>
      
    </div>
  )
}
