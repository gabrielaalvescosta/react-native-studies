import React, { useState } from 'react';
import { Button, Text } from 'react-native';


// passando as props inicial e passo que estão no App.js
export default ({ inicial, passo }) => {

    // Destructuring da variavel numero com estado inicial de valor props.inicial (que é igual a 100).

    const [numero, setNumero ] = useState(inicial)

            // numero++ ou numero-- não é a melhor forma de incrementar a variavel. Usamos a função de estado para modificar a variavel numero por meio do useState. 

    function incrementar() {

        // incrementando usando o valor da props de 
        setNumero(numero + passo);
        console.warn(numero);
    }

    function decrementar() {

        setNumero(numero - 1);
        console.warn(numero);
    }

    return (
        <>
        <Text>{numero}</Text>
        <Button 
            title="+"
            onPress={incrementar} 
        />
        <Button 
            title="-"
            onPress={decrementar}

        />
        </>
    )
}