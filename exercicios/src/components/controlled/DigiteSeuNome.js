import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default props => {

    const [ nome, setNome ] = useState("Testando");

    return (
        <View>
            <Text>Resultado do input: {nome}</Text>
            <TextInput 
                    placeholder='Digite o seu nome'
                    value={nome}
                    onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}