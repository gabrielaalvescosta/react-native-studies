import React from 'react';
import { Text, View } from 'react-native';

// components
import Primeiro from './components/Primeiro';
import ComponenteSemNomePadrao, { Componente2, Componente3 } from './components/Multi';
import MinMax from './components/MinMax';

function App() {

    console.warn("Console.warn para debug");

    return <Text>
            <View>
            <MinMax min="3" max="8"/>
            <Primeiro/>
            <ComponenteSemNomePadrao/>
            <Componente2/>
            <Componente3/>
            {/* um comentário dentro do componente */}
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