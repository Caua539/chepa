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
  Icon,
  StatusBar,
} from 'react-native';

import PropTypes from 'react';

import ViewListas from './ViewListas'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class ViewPrincipal extends Component {

  render() {
    return (
      <View style={Estilo.principal}>
        <StatusBar hidden></StatusBar>
        <ImagemPrincipal></ImagemPrincipal>
        <Botao prop1 = {this.props.navigator}></Botao>
      </View>
    );
  }
};

export class ImagemPrincipal extends Component {
  render() {
    return (
      <View style={Estilo.imagem}>
        <Image source={require('xepa/resources/img/Top_Image_3.png')}
        />
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
      <View>
        <View>
          <TouchableHighlight 
             onPress={() => {
             this.props.prop1.push({id: 'listas'})
            }}>
            <View style={Estilo.navBarLeftButton} >
                <Image source={require('xepa/resources/img/Bulleted-List-icon.png')}
                   style={{width: 70, height: 70}} />
                <Text style={Estilo.label}>Minhas Listas</Text>   
            </View>     
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.prop1.push({id: 'dispensa'})}>
          <View style={Estilo.navBarLeftButton} >
            <Image source={require('xepa/resources/img/closet.png')}
                   style={{width: 70, height: 70}} />
            <Text style={Estilo.label}>Minha Dipensa</Text> 
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
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30
  },

  botaoTexto: {
    color: 'white'
  },

navBarLeftButton: {
    backgroundColor: '#B9B9B9',
    borderColor: '#5C5C5C',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#fff',
    marginTop: 0,
    marginBottom: 20,
    shadowOffset: { width: 2, height: 0 },
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
    paddingVertical: 3,
    paddingHorizontal: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
},
  label: {
    color: '#01161E',
    fontSize: 20,
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    alignSelf: 'center',
    textShadowColor: '#FFF'
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
    alignItems: 'center'
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
    marginTop: 0,
    marginBottom: 50
  }
});
