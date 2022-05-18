import React from 'react';
import { Text } from 'react-native';
import Padrao from '../estilo/Padrao';

// quando o export nao possui default, precisamos dar nome a funcao (Inverter)
// ao exportar será import { Inverter } (com chaves)
export const Inverter = props => {

    const inv = props.texto.split('').reverse().join('');
    return <Text style={Padrao.ex}>{inv}</Text>

}