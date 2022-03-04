import React from "react";
import alunos from "../../data/alunos"; //alunos é o array com os elemntos
import './ListaAluno.css'

export default function ListaAlunos(props) {

  //Exemplo pegando um elemento do array individualmente
  /*   
  const lista1 = (
      <li>
        #{alunos[0].id} - {alunos[0].nome} - nota: {alunos[0].nota} 
      </li>
    ); 
  */

  //Pegando todos os elemntos do array
  //É necessário utilizar uma chave única (key) para auxiliar o React a encontrar a referência, "este dado tem que ser único", caso contrário pode refletir em um conflito de referencias iguais (evite dados que possam se repetir como por exemplo nomes) 
  const lisAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}  >
        {aluno.id} - {aluno.nome} nota: {aluno.nota}
      </li>
    )
  })

  return (
    <div>
      <h2>Sétimo Componente</h2>
      <ul className="Lista"> 
        {lisAlunos}
      </ul>
    </div>
  )
}