import React, {Component} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


export default class App extends React.Component {

    // console.warn("Console.warn para debug");
    render() {
    return (
            <SafeAreaView style={styles.App}>
            <Text style={styles.t20}> App.js</Text>
            </SafeAreaView>)
    }

}

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

const styles = StyleSheet.create({
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