import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Filho';

export default props => {

    // criamos esse state para atribuir o numero gerao na funcao do filho
    const [ num, setNum ] = useState(0);

    function exibirNumero(numero) {
        setNum(numero);
    }

       return (
           <>
           <Text>{num}</Text>
           <Filho 
                funcao={exibirNumero}
                min={1}
                max={60}
           />
           </>
       )
}
