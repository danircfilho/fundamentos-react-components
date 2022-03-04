//Componente funcional - baseados em uma função
import React from "react";

function PrimeiroComp() {
    const msg =
        "Exemplo JS (como string) em um componente JSX. Códigos Javascripts devem estar entre colchetes {}.";

    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div>
    );
}

export default PrimeiroComp;
