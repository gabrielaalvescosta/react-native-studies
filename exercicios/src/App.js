import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Mega from './components/megasena/Mega';
// import FlexboxV4 from './components/flexbox/FlexboxV4';
// import UsuarioLogado from './components/condicional/UsuarioLogado';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import Familia from './components/familia/Familia';
// import Membros from './components/familia/Membros';
// import Parimpar from './components/Parimpar';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import Primeiro from './components/Primeiro';
// import ComponenteSemNomePadrao, { Componente2, Componente3 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import DigiteSeuNome from './components/controlled/DigiteSeuNome';

function App() {

    // console.warn("Console.warn para debug");

    return (
            <SafeAreaView style={style.App}>
            <Mega qtdeNumeros={6}/>
            {/* 
            <FlexboxV4/>
            <DigiteSeuNome/>
            <UsuarioLogado usuario={{nome: 'João', email: 'joao@joao.com.br'}} />
            <ListaProdutosV2/>
            <ListaProdutos/>
                        <Parimpar num={3} />
            <Diferenciar/>
            <Familia>
                <Membros nome="Susana" sobrenome="Paiva" />
                <Membros nome="Joana" sobrenome="Paiva" />
            </Familia>
            <Familia>
                <Membros nome="Marília" sobrenome="José"/>
            </Familia>
            <ContadorV2 />
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
          </SafeAreaView>)
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

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
        
    }
})