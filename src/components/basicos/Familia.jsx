import React, { cloneElement } from "react";

//Pegando vários elementos com React.map
//As props dos filhos (props.children) aplicam-se em um novo e individual elemento filho (el, ou child)
//Retorna o clone do elemento aplicando em cada filho (child) as propriedades (props)
export default function Familia(props) {
    return (
      <div>
        <h2>Sexto Componente</h2>
        <p>Componente Familia e FamiliaMembro</p>
        {React.Children.map(props.children,(child) => {
          return cloneElement(child, props)
        })}
      </div>
    )
}

/*
Este caso serve para pegar um só elemento...Para muitos haverá erros na renderização...

export default function Familia(props) {
    return (
      <div>
        { cloneElement(props.children, props) }
      </div>
    )
}
*/


/*
Neste caso, o componente pai não passa automaticamente as propriedades para o filho
É necessário atribuir a FamiliaMembro(filho) as props do componente Familia(pai)
Veja as formas...
  <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}/>   recebe props (sobrenome) de Familia(pai)
  <FamiliaMembro nome="Pedro" { ...props }/>  aqui, com spread (...) recebe "todas as props" de Familia(pai), note    que há dois sobrenomes (atributos) Ferreira e Gomes
  <FamiliaMembro nome="João" sobrenome="Aguiar"/> aqui recebe um novo sobrenome, não do componente Familia(pai)
*/
/* 
  export default function Familia(props) {
  return (
    <div>
      <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}/>
      <FamiliaMembro nome="Pedro" { ...props }/>
      <FamiliaMembro nome="João" sobrenome="Aguiar"/>
    </div>
  )
}
*/


