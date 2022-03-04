import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai() {
  
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState()
  const [sexo, setSexo] = useState()


  function paiRecebeInformacoes(nome, idade, sexo) {
    setNome(nome)
    setIdade(idade)
    setSexo(sexo) 
  }

  return (
    <div>
      <h2>Décimo Primeiro Componente</h2>
      <div>
        <span>{ nome } </span>
        <span>{ idade } </span>
        <span>{ sexo ? 'Masculino' : 'Feminino' }</span>
      </div>
      <IndiretaFilho quandoClicar={ paiRecebeInformacoes }/>
    </div>
  )
}

//O componente Pai tem comunicação com o filho (via props), porém o compnente Filho não (caso contrario este seria Pai)
//Porém o Pai que tem comunicação pode passar informações através de callbacks, como exemplo, o Pai passa uma função para o Filho e o Filho para se comunicar com o Pai dispara um evento