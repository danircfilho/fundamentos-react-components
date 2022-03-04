import React, { useState } from "react";

import './Input.css'

export default function Input(props) {

  const [valor, setValor] = useState('Exemplo: Estado do Valor Inicial')

  function quandoMudar(e) {
    setValor(e.target.value)
  }

  return (
    <div className="Input">
      <div className="Align">
        <h2>Décimo Segundo Componente</h2>
        <h3>{ valor }</h3>
        <input value={ valor } onChange={ quandoMudar }/>
        <input value={ valor } readOnly/> 
        <input value={ undefined }/> 
      </div>
    </div>
  )
}

/* Explicação - Componente Controlado - Mudança de Estado
  ...variável que mudará o estado
  const [valor, setValor] = useState('Exemplo: Estado do Valor Inicial')

  ...Função que seta o evento (e) de mudança, como alvo (target) o valor (value)
  function quandoMudar(e) {
    setValor(e.target.value)
  }

  return (
    <div className="Input">
      <h2>Décimo Segundo Componente</h2>
      <h3>{ valor }</h3>

      <input value={ valor } onChange={ quandoMudar }/>  ...onChange contem a função que seta a mudança

      <input value={ valor } readOnly/>  ...readOnly permite somente mostrar mas não alterar os dados, se deixarmos somente value={ valor } será gerado erros no código pois devemos informar que não queremos tratar os eventos de mudança de estado, para isso usa-se readOnly 

      <input value={ undefined }/> Componente não controlado, nã há relação com estados do componente. Não usar null pois haverá erros, é necessário definir uma situação (no caso determina-se uma situação indefinida) e não nula
    
    </div>
  )
*/