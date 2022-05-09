import React from 'react';
import { View } from 'react-native';

export default props => {

    const lados = 50;

    return (
        <View style={{
            height: lados,  
            backgroundColor: props.cor || '#000' 
            }}>

        </View>
    )
}