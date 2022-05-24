import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const NavigateToToDo = props => {
        props.navigation.navigate('ToDo');
}


export default props => {
    return (
        <View>
            <Text>Homepage</Text>
            <Button title="Press to go to To Do Screen" onPress={() => NavigateToToDo(props)} />
        </View>
    );
}