import React from 'react';
import { Button } from 'react-native';

export default props => {

        function geraNumeroAleatorio(min, max) {

            const fator = max - min + 1;
            return parseInt(Math.random() * fator) + min;

        }

       return (
           <Button 
                onPress={function() {
                    const n = geraNumeroAleatorio(props.min, props.max);
                    props.funcao(n);

                    // props.funcao(n) se refere a funcao que foi atribuida ao props de nome funcao no componente pai

                }}
                title="Executar"
           />
       )
}
