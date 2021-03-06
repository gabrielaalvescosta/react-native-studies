import React from 'react';
import { Button } from 'react-native';

export default props => {

    function executar() {
        console.warn('Função executada');
    }

    return (
        <>
        <Button 
            title="Executar"
            onPress={executar}
        />
        <Button 
        title="Executar #02"
        onPress={function() {
            console.warn('Executando a função anônima do botão 2 depois de clicado')
        }}
        />
        <Button 
        title="Executar #03"
        onPress={() => {console.warn('Executando a arrow function do botão 3')}}
        />
        </>
    )
}