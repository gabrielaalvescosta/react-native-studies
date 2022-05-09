import React from 'react';
import { Text } from 'react-native';
import Condicional from './Condicional';


// props é um objeto populado ou vazio
// Linha 14-15: usuario && Object.keys(usuario).length !== 0 também é possível
export default props => {

    const usuario = props.usuario || {};

    return (
        <>
        <Condicional teste={usuario && usuario.nome && usuario.email}>        
            <Text>
            {usuario.nome} - {usuario.email}
            </Text>
        </Condicional>
        </>
    )
}