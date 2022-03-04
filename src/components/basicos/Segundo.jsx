//Passar parametros
//Parametros são propriedades do documento (props - usado em convenção)

import React from "react";

function ComParametro(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            <p>
                O <strong>{props.aluno} </strong>
                obteve nota <strong>{props.nota} </strong>e foi{" "}
                <strong>{props.condicao}</strong>
            </p>
        </div>
    );
}

export default ComParametro;
