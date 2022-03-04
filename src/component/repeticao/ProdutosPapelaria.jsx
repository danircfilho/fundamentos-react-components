import React from "react";
import produtos from '../../data/produtos'

//Estilos
import './ProdutosPapelaria.css'

export default function ProdutosPapelaria(props) {
  //No JS pode se ter função dentro de função
  function pegarLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.item}</td>
          <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  }

  return (
    <div className="ProdutosPapelaria">
      <h2>Oitavo Componente</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição do Item</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{pegarLinhas()}</tbody>
      </table>
    </div>
  )
}