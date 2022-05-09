import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
    return(
        <View style={style.FlexV2}>
            <Quadrado cor={'#ff0999'} lado={30}/>
            <Quadrado cor={'#787878'} lado={40}/>
            <Quadrado cor={'#f77999'} lado={50}/>
            <Quadrado cor={'#ddee44'} lado={60}/>
            <Quadrado cor={'#ee7734'} lado={80}/>
        </View>
    )

}

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'space-between'
    }
})