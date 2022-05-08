import React from 'react';
import { Platform, PlatformColor, Text } from 'react-native';
import Estilo from './estilo';

export default props => {
    if (PlatformColor.OS === 'ios') {

        return <Text style={Estilo.txtG}>IOS</Text>

    } else if (Platform.OS === 'android') {

        return <Text style={Estilo.txtG}>Android</Text>  

    } else {
        
        return <Text style={Estilo.txtG}>Android</Text>
    }
}