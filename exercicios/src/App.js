import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';


// import Simples from './componentes/Simples';
// import Array from './componentes/Array';
// import ParImpar from './componentes/ParImpar';
// import { Inverter } from './componentes/Export';


// rotas - react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// paginas
import Home from './pages/Home';
import ToDo from './pages/ToDo';

  
const Stack = createNativeStackNavigator(); 


// Atentar para nomear "name" com o mesmo nome do componente para a rota ser encontrada
// Title é o nome que será encontrado no topo do app quando abrir a página

function App() {

    return (
            <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                      name="Home" 
                      component={Home}
                      options={{ title: 'Home: no topo da página' }} 
                />
                <Stack.Screen 
                      name="ToDo" 
                      component={ToDo}
                      options={{ title: 'ToDo: não tem nada a ver com o name ToDo no props name' }} 
                />
            </Stack.Navigator>
            </NavigationContainer>
            )
    }


export default App;
/*

COMPONENTE FUNCAO ANONIMA

export default function() {
    return <Text>Componente usando função anônima</Text>
}

 <Text style={styles.t20}> App.js</Text>
            <Simples texto="Flexível"/>
            <Array/>
            <Inverter texto="React Native"/>
            <ParImpar numero={40}/> 
            
*/




/*
COMPONENTE COMPACTO EM 1 LINHA - ARROW FUNCTION

export default () => <Text>Componente usando arrow function</Text>

*/

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        flex: 1,
      },
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
        
    },
    t20: {
        fontSize: 20
    }
})