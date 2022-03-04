import React from "react";

export default function Fragmento() {
    return (
        <div>
            <h2>Terceiro Componente</h2>
            <p>
                * Erro de 'fragment', ou seja deve-se envolver os componentes em
                uma tag!
            </p>
            <p>* Esta tag pode ser uma 'div' ou tag vazia</p>
            <React.Fragment key={1}>
                <div>
                    <p>
                        * Ao inspecionar o código "usando React.Fragment" a tag
                        'p' não estará envolvido por uma 'div'
                    </p>
                    <p>
                        * Veja que o componente recebeu um atributo! O atributo
                        Key!
                    </p>
                </div>
            </React.Fragment>
            <>
                <div>
                    <p>
                        * Com tags vazias obtêm-se o mesmo resultado de usar
                        React.Fragment na tag, é um modo simplificado, porém
                        estas tags não poderão receber atributos/propriedades
                    </p>
                </div>
            </>
        </div>
    );
}
