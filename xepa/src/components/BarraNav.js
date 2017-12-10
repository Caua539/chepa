import React, {Component} from 'react';
import {Text,View, StyleSheet,Button, Image, TouchableHighlight, Alert} from 'react-native';
import PropTypes from 'prop-types';

export default class BarraNav extends Component{
    constructor(props){
       super(props);
    }
    
  
    
    render(){
        if(this.props.view == "principal"){
            return(
            <TouchableHighlight 
             onPress={() => {
             this.props.navigator.push({ id: 'principal' })
            }}>
            <View>
                <Image source={require('xepa/resources/img/arrow-back.png')}
                   style={{width: 50, height: 50}} /> 
            </View>     
          </TouchableHighlight>
            );
        }else if(this.props.view == "listasAdd"){
            return(
            <TouchableHighlight 
            style={{width: 300}} 
             onPress={() => {
             this.props.navigator.push({ id: 'listasAdd' })
            }}>
            <View style={estilo.navBarLeftButton}>
                <Image source={require('xepa/resources/img/add-icon.png')}
                   style={{width: 40, height: 40}} /> 
                <Text style ={estilo.botaoTexto}>Adicionar Lista</Text>  
            </View>     
          </TouchableHighlight>
            );
        }else if(this.props.view == "dispensa"){
            return(
            <TouchableHighlight 
            style={{width: 300}} 
             onPress={() => {
             this.props.navigator.push({ id: 'dispensaAdd' })
            }}>
            <View style={estilo.navBarLeftButton}>
                <Image source={require('xepa/resources/img/add-icon.png')}
                   style={{width: 40, height: 40}} /> 
                <Text style ={estilo.botaoTexto}>Adicionar item</Text>  
            </View>     
          </TouchableHighlight>
            );
        } else if(this.props.view == "add_itens_lista"){
            return(
                <View style={estilo.barraTitulo}>
                    <Text>R${this.props.valorOrcamento}</Text>
                    <Text>Subtotal: R${this.props.subTotal}</Text>
                </View>
                );
        } else{
            return(
            <TouchableHighlight 
                onPress = { () => {this.props.navigator.pop()}}>
                <View>
                    <Image source={require('xepa/resources/img/arrow-back.png')}
                    style={{width: 40, height: 40}} /> 
                </View>     
            </TouchableHighlight>
            );
        }
        
    };
}

const estilo = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#fff',
        height: 50,
        width:360,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    estiloTexto: {
        paddingTop: 10,
        margin: 5,
        textAlign: 'center'
    },
    botaoTexto:{
        color: '#01161E',
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        alignSelf: 'center',
        textShadowColor: '#FFF',
        marginLeft: 10
    },
    botao: {
        width: '180'
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
    marginLeft: 90,
    width: 200,
    alignItems: 'center',
}
})
