import React from 'react';
import { View, Text } from 'react-native';

import If from './If';
import Padrao from '../estilo/Padrao';

// essa funcao somente e visivel neste arquivo
function parOuImpar(num) {
    if (num % 2 == 0) {
        return <Text style={Padrao.ex}>O numero {num} é par!</Text>
    } else {
        return <Text style={Padrao.ex}>O numero {num} é ímpar!</Text>
    }

    // modelo alternativo de renderizacao condicional
    // const v = num % 2 == 0 ? 'Par' : 'Ímpar'
    // return <Text>O número {num} é {v}</Text>
}

// para usarmos a funcao, basta usar chaves e adicionar a props no parametro da funcao

export default props => {
    return (
        <View>

            {parOuImpar(props.numero)}

            {/* {
                props.numero % 2 == 0 ? <Text>O número {props.numero} é Par</Text> : <Text>O número {props.numero} é Ímpar</Text>
            } */}

            <If teste={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>O numero {props.numero} é Par, caso contrário este componente não é renderizado.</Text>
            </If>
            <If teste={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>O numero {props.numero} é Ímpar, caso contrário este componente não é renderizado.</Text>
            </If>
        </View>
    )
}