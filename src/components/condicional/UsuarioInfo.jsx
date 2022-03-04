import React from "react";
import CondicIf from './CondicIf';

export default function UsuarioInfo(props) {
  const usuario = props.usuario || {} //parâmetros => props ou {} objeto vazio

  return (
    <div>
      <CondicIf test={ usuario && usuario.nome }>
        Seja bem vindo <strong>{ usuario.nome }!</strong>
      </CondicIf>
      {/* Caso não supra a condição acima, abaixo contém uma negação que determinará a condição não atendida! */}
      <CondicIf test={ !usuario || !usuario.nome }>
        Não sei o seu nome, mas seja bem vindo <strong>Amigo!</strong>
      </CondicIf>
    </div>
  )
}

/*
O componente If contém uma condicional (test) que será repassada através de props para componentes filhos.
Neste caso o componente UsuarioInfo recebe a condicional (test) atraves de props.
A condicional test recebe a variável 'usuario' e a props (nome), se atende ao if executa!
*/
