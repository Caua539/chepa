import React, {Component} from 'react';
import {Text,View, StyleSheet,Button, Image, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

export default class BarraNav extends Component{
    constructor(props){
       super(props);
    }
    
  
    
    render(){
        if(this.props.view == "listasAdd"){
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
        }else if(this.props.view == "dispensa"){
            return(
            <View style={estilo.barraTitulo}>
                <Button
                    onPress={() => { this.props.navigator.push({ id: 'dispensaAdd' }) }}
                    title="Adicionar item">
                </Button>
                <Button
                    onPress={() => { this.props.navigator.push({ id: 'principal' }) }}
                    title="Inicio">
                </Button>
            </View>
            );
        } else if(this.props.view == "add_itens_lista"){
            return(
                <View style={estilo.barraTitulo}>
                    <Button
                        onPress={() => { this.props.navigator.push({ id: 'add_itens_lista', valorOrcamento: this.props.valorOrcamento}) }}
                        title="Adicionar item"
                        style={estilo.botao}>
                    </Button>
                    <Text>R${this.props.valorOrcamento}</Text>
                    <Text>Subtotal: R${this.props.subTotal}</Text>
                    <Button
                        onPress={() => { this.props.navigator.push({ id: 'principal' }) }}
                        title="Inicio">
                    </Button>
                </View>
                );
        } else{
            return(
                <View style = {estilo.barraTitulo}>
                    <Button
                    onPress = { () => {this.props.navigator.pop()}}
                    title = "Voltar"></Button>
                    <Text style ={estilo.estiloTexto}>Economize já!</Text>
                </View>
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
    botao: {
        width: '180'
    }
})
