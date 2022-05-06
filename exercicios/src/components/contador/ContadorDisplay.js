import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default props => {
    return (
        <View> 
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#666',
        padding: 200,
        width: 300,
    },
    DisplayText: {
        color: '#ff9966'
    }
})