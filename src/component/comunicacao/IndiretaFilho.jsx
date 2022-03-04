import React from "react";

export default function IndiretaFilho(props) {

  const cb = props.quandoClicar
  //Gerar novos estados na aplicação com idade randômica
  const min = 30
  const max = 60
  const idadeAleatoria = ()=>parseInt(Math.random()*(max-min)) + min

  return (
    <div>
      <div>Filho</div>
      <button onClick={ _ => cb('Roberto', idadeAleatoria, true) }>
        Fornecer Informações      
      </button>  
    </div>
  )
}

/* 
no código retirado: (e) substituído por _ (pois não será usado); props.quandoClicar foi colocando em uma variável..abaixo arrow function sem redução...
<button onClick={ e => props.quandoClicar('Daniel', 46, true) }>

abaixo de forma verbosa, no código com arrow function (forma reduzida)
  <button onClick=
    function (e) {
        props.quandoClicar('Daniel', 46, true)
    } 
  }>

  Explicando o código...
      <button onClick={   ...evento de clicar no botão.
        function (e) {    ...o (e) representa o evento do click (será ignorado), pois a função conterá outro evento.
          props.quandoClicar('Daniel', 46, true)  ...ignora-se o evento e insere a função (callback) recebida via props e retorna os valores ao Pai
        }
      }>   
*/