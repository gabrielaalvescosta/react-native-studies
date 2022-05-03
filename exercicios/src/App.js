import React from 'react';
import { Text, View } from 'react-native';

// components
import Primeiro from './components/Primeiro';
import ComponenteSemNomePadrao, { Componente2, Componente3 } from './components/Multi';

function App() {
    return <Text>
            <View>
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