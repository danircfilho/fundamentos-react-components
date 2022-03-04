import React from 'react'

export default function ParImpar(props) {
  const valor = props.valor % 2 === 0
  return (
    <div>
      <h2>Nono Componente</h2>
      { valor ? 
        <span>Par</span> : 
        <span>Impar</span>
      }
    </div>   
  )
}