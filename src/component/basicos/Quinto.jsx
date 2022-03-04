
import React from "react";

export default function Aleatorio(props) {

    const { min, max } = props; //valores recebidos de props no componente
    const aleatorio = parseInt(Math.random() * (max - min)) + min; //lógica de número aleatório

    return (
        <div>
            <h2>Quinto Componente</h2>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>Resultado: {aleatorio}</p>
        </div>
    );
};

/*
Destructuring (JS) para as props acima representadas:
Do lado esquerdo { min, max } representam os valores que quero ler de determinado atributo/proriedade.
Do lado direito é a propriedade (props)
Desta forma interpreta-se que a variavel corresponde ao min e max das props. Fica menos verboso.
*/
