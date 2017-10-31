import React, {Component} from 'react';
import {
  View,
  StatusBar, 
  Button,
  StyleSheet,
  AsyncStorage,
  Text
} from 'react-native';

import PropTypes from 'prop-types';

import BarraNav from './/BarraNav';

export default class ViewListas extends Component{
    
  constructor(props) {
    super(props);
    this.state = {  nomeLista: 'aaaaa', 
                    valorOrcamento: '',
                    supermercado: '',
                  };
  }

  recuperarInfo(){
    AsyncStorage.getItem("nomeLista").then((value) => {
      this.setState({ "nomeLista": value }).done()
    })

    return this.state.nomeLista;
  }
  
  render(){
        return(
            <View style = {{flex: 1}}>
              <StatusBar
                hidden
              /> 
              <BarraNav navigator = {this.props.navigator}/> 
              <Button 
                onPress = { () => {this.props.navigator.push({id : 'listasAdd'})}}
                title = "Adicionar lista">
                
              </Button>
              <Text> Nome: {this.recuperarInfo()}</Text>
            </View>
        );
    };
}

const Estilo = StyleSheet.create({})
