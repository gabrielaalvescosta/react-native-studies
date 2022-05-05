import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default ({ mensagem, outraMensagem }) => {
       return (
           <>
           <Text style={Estilo.txtG}>
                {mensagem}
           </Text>
           <Text style={Estilo.txtG}>
                {outraMensagem}
           </Text>
           </>
       )
}
