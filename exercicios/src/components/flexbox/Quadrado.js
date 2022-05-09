import React from 'react';
import { View } from 'react-native';

export default props => {

    const lados = props.lado || 50

    return (
        <View style={{
            height: lados,
            width: lados, 
            backgroundColor: props.cor || '#000' 
            }}>

        </View>
    )
}