import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
    return(
        <View style={style.FlexV2}>
            <Quadrado cor={'#ff0999'}/>
            <Quadrado cor={'#787878'}/>
            <Quadrado cor={'#f77999'}/>
            <Quadrado cor={'#ddee44'}/>
            <Quadrado cor={'#ee7734'}/>
            <Quadrado cor={'#ea7899'}/>
        </View>
    )

}

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#000',
        justifyContent: 'space-between'
    }
})