import React, {Component} from 'react';
import {
  View,
  StatusBar, 
  Button,
  StyleSheet,
} from 'react-native';

import BarraNav from './/BarraNav';
 
export default class ViewListas extends Component{
    render(){
        return(
            <View style = {{flex: 1}}>
              <StatusBar
                hidden
              /> 
              <BarraNav navigator = {this.props.navigator}/> 
              <Button 
                onPress = { () => {this.props.navigator.push({id : 'listasAdd'})}}
                title = "Adicionar lista"></Button>
            </View>
        );
    };
}

const Estilo = StyleSheet.create({})
