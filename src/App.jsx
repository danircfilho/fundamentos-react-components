/* eslint-disable no-undef */
import React from "react";

//Estilos
import './App.css'

//Componentes
import PrimeiroComp from "./component/basicos/Primeiro";
import ComParametro from "./component/basicos/Segundo";
import Fragmento from "./component/basicos/Terceiro";
import FormatFunction from "./component/basicos/Quarto";
import Aleatorio from "./component/basicos/Quinto";
import Card from "./component/layout/Card";
import Familia from "./component/basicos/Familia";
import FamiliaMembro from "./component/basicos/FamiliaMembro";
import ListaAlunos from "./component/repeticao/ListaAluno";
import ProdutosPapelaria from "./component/repeticao/ProdutosPapelaria";
import ParImpar from "./component/condicional/ParOuImpar";
import UsuarioInfo from "./component/condicional/UsuarioInfo";
import DiretaPai from "./component/comunicacao/DiretaPai";
import IndiretaPai from "./component/comunicacao/IndiretaPai";

function App() {
    return (
        <div className="App">
            <h1>Fundamentos de React JS</h1>

            <div className="CardExercicio">

                <Card titulo="#11git - Comunicação Indireta" color='#d4e722b5'>
                    <IndiretaPai />
                </Card>

                <Card titulo="#10 - Comunicação Direta" color='#70a0b3b5'>
                    <DiretaPai />
                </Card>

                <Card titulo="#9 - Renderização Condicional" color='#ce65b7b5'>
                    <ParImpar valor={20}/>
                    <UsuarioInfo usuario={{ nome: 'Daniel' }} />
                    <UsuarioInfo usuario={{}} /> {/* objet vazio */}
                    <UsuarioInfo usuario={{ email: 'email@email.com' }} />
                </Card>

                <Card titulo="#8 - Repetições - Tabela de Preço" color='#b6888e'>
                    <ProdutosPapelaria />
                </Card>

                <Card titulo="#7 - Repetições - Lista de Alunos" color='#9b86a0'>
                    <ListaAlunos />
                </Card>

                <Card titulo="#6 - Componente com Filhos" color='#a468b3'>
                    <Familia sobrenome="Silva" nomefinal="Gomes">
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="João" />
                    </Familia>
                </Card>

                <Card titulo="#5 - Numeros Aleatórios" color='#7c5e5e'>
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="#4 - Formatar Funções" color='#43b856'>
                    <FormatFunction />
                </Card>

                <Card titulo="#3 - Tag Fragmento - 'Fragment'" color='#cabbbb'>
                    <Fragmento />
                </Card>

                <Card titulo="#2 - Passar Parametros" color='#b47039'>
                    <ComParametro
                        titulo="Segundo Componente"
                        texto="Componente com parâmetros (props)"
                        aluno="Pedro"
                        nota={9.6}
                        condicao="aprovado"
                    />
                </Card>

                <Card titulo="#1 - Componente" color='#6a5092'>
                    <PrimeiroComp />
                </Card>

            </div>
        </div>
    );
}
export default App;
