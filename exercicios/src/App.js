import React from 'react';
import { Text, View } from 'react-native';

// components
import Primeiro from './components/Primeiro';
import ComponenteSemNomePadrao, { Componente2, Componente3 } from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';

function App() {

    console.warn("Console.warn para debug");

    return <Text>
            <View>
            <Titulo principal="Cadastro" secundario="Tela de Cadastro"/>
            <Botao/>

            {/* Abaixo um contador de valor inicial 100 e passo 10 e, embaixo dele um contador que usa os valores padrão que foram atribuidos nas props */}

            <Contador inicial={100} passo={10}/>
            <Contador/>

            {/* Testando componentes com props min e max */}

            <MinMax min="3" max="8"/>
            <Aleatorio min={1} max={60} />


            {/* testando componentes */}

            <Primeiro/>
            <ComponenteSemNomePadrao/>
            <Componente2/>
            <Componente3/>
            </View>
          </Text>
}

export default App;

/*

COMPONENTE FUNCAO ANONIMA

export default function() {
    return <Text>Componente usando função anônima</Text>
}

*/


/*
COMPONENTE COMPACTO EM 1 LINHA - ARROW FUNCTION

export default () => <Text>Componente usando arrow function</Text>

*/