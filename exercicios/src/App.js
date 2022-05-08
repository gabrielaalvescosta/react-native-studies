import React from 'react';
import { Text } from 'react-native';
// import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';
import Parimpar from './components/Parimpar';

// components
// import Primeiro from './components/Primeiro';
// import ComponenteSemNomePadrao, { Componente2, Componente3 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';

function App() {

    // console.warn("Console.warn para debug");

    return (
            <>
            <Parimpar num={3} />
            <Diferenciar/>
            {/* <ContadorV2 />
           <Text>
               Contador
           </Text>
            <Text>
            <View>

            <Titulo principal="Cadastro" secundario="Tela de Cadastro"/>
            <Botao/>

            <MinMax min="3" max="8"/>
            <Aleatorio min={1} max={60} />

            <Primeiro/>
            <ComponenteSemNomePadrao/>
            <Componente2/>
            <Componente3/>
            </View>
          </Text> */}
          </>)
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