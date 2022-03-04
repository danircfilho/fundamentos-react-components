import React from "react";

function FormatFunction() {
    return (
        <>
            <h2>Quarto componente</h2>
            <p>
                Na IDE com o "código comentado" é apresentado várias formas de
                se escrever uma função
            </p>
        </>
    );
}
export default FormatFunction;

/* Usaremos a primeira forma que é a mais enxuta */

/*
Primeira forma - a mais reduzida (arrow function) exporta default, sem o nome da função e retorna (sem a expressão return) todo o conteúdo nos parenteses:

export default () => (
  <> 
    <p>Exemplo 1</p>
  </>
);

Segunda forma - mais verbosa (expressão function e nome da função):

export default function NomeFuncao() {
  return (
    <> 
      <p>Exemplo 1</p>
    </>
  )
};

Terceira forma - completa e mais verbosa:

function Exemplo() {
  return (
    <> 
      <p>Exemplo 1</p>
    </>
  )
};
export default Exemplo
*/
