import React from "react";

//Estilo
import "./Card.css";

export default function Card(props) {

    const cardColor = {
        backgroundColor: props.color || '#008',
        borderColor: props.color || '#008'
    }
    
    return (
        <div className="Card" style={cardColor}>
            <div className="Titulo">{ props.titulo }</div>
            <div className="Conteudo">{ props.children }</div>
        </div>
    );
}

/* Estamos passando os componentes filhos (children - no plural = filhos) do componente, ou seja, outros componentes dentro do componente Card */
