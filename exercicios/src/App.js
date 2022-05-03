import React from 'react';
import { Text } from 'react-native';
import Primeiro from './components/Primeiro';

function App() {
    return <Text><Primeiro/>Componente</Text>
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