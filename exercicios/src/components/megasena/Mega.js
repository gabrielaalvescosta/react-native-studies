import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Estilo from '../estilo';

export default class Mega extends React.Component {
    render() {
        return (
            <View style={Estilo.txtG}>
              <Text>{this.props.qtDeNumeros}</Text>
            </View>
        )
    }
  }
 
