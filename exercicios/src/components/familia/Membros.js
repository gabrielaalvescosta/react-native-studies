import React from 'react';
import { Text } from 'react-native';


export default ({ nome, sobrenome }) => {

    return (
        <>
        <Text>Membros da família {sobrenome}:</Text>
        <Text>{nome} {sobrenome}</Text>
        </>
    )

}