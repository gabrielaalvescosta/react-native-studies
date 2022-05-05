import React from 'react';
import { Text } from 'react-native';

// estilo
import Estilo from './estilo';

export default props => {
    return (
      <>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
      </>
    )
}

// React Fragment é usado quando precisamos retornar mais de 1 componente.
// Usamos React.Fragment, Fragment (necessário importar) ou apenas <> </> 