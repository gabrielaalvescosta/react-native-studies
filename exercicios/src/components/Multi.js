import React from 'react';
import { Text } from 'react-native';


// Por regra, deve-se evitar criar multi componentes no mesmo arquivo

// Funcao default nao precisa de nome para ser exportada
export default function () {
    return <Text>Componente 1</Text>
}

// Funcao exportadas (nao default) precisam ter um nome para serem exportadas
export function Componente2() {
    return <Text>Componente 2</Text>
}

export function Componente3() {
    return <Text>Componente 3</Text>
}

/* Exportando multi componentes ao mesmo tempo (forma alternativa)
export { Componente2, Componente3 } e
export default { ComponentePadrao }
*/