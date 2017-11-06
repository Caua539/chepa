import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import PropTypes from 'react';

import ViewListas from './/ViewListas'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class ViewPrincipal extends Component {

  render() {
    return (
      <View style={Estilo.principal}>
        <StatusBar hidden></StatusBar>
        <ImagemPrincipal></ImagemPrincipal>
        <TextoBoasVindas></TextoBoasVindas>
        <Botao prop1 = {this.props.navigator}></Botao>
      </View>
    );
  }
};

export class ImagemPrincipal extends Component {
  render() {
    return (
      <View style={Estilo.imagem}>
        <Image source={require('xepa/resources/img/Principal.png')}
        />
      </View>
    );
  }
};

export class TextoBoasVindas extends Component {
  render() {
    return (
      <View>
        <Text style={Estilo.texto}>Bem vindo a xepa!</Text>
      </View>
    );
  }
};

export class Botao extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style = {{flex: 1}}>
        <View style={Estilo.viewBotoes}>
          <TouchableHighlight onPress={() => {
             this.props.prop1.push({id: 'listas'})
            }}>
            <View>
                <Image source={require('xepa/resources/img/iconeLista.png')}
                      style={{width: 120, height: 100}} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.prop1.push({id: 'dispensa'})}>
          <View>
            <Image source={require('xepa/resources/img/iconeDispensa.png')}
                   style={{width: 120, height: 100}} />
          </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

//Formatações:
const Estilo = StyleSheet.create({
  botao: {
    backgroundColor: '#342E37',
    borderColor: '#FAFFFD',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: { width: 2, height: 0 },
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.4,
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30
  },

  botaoTexto: {
    color: 'white'
  },

  texto: {
    color: '#01161E',
    fontSize: 30,
    fontFamily: 'sans-serif-light',
    fontStyle:'italic',
    fontWeight: 'bold',
    alignSelf: 'center',
    textShadowColor: '#FFF',
    paddingTop: 50
  },

  textoMenor: {
    textAlign: 'center',
    color: '#01161E',
    fontSize: 15,
    fontFamily: 'sans-serif',
    alignSelf: 'center',
    paddingTop: 10  
  },

  principal: {
    backgroundColor: '#D4D2D5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  principal2: {
    flex: 1
  },

  viewBotoes: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },

  imagem: {
    marginTop: 150,
    flexDirection: 'row',
    width: 120
  }
});
