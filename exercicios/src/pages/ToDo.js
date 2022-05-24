import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const NavigateToHome = props => {
    props.navigation.navigate('Home');
}


export default props => {
    return (
        <View>
            <Text>To do list</Text>
            <Button title="Press to go to Home Screen" onPress={() => NavigateToHome(props)} />
        </View>
        
    );
}