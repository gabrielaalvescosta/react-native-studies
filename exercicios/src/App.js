import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Simples from './componentes/Simples';
import Array from './componentes/Array';
import ParImpar from './componentes/ParImpar';
import { Inverter } from './componentes/Export';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
    return (
      <View style={{flex: 1, color: '#333', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
const Stack = createNativeStackNavigator(); 


function App() {

    return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
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