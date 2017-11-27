import React, {Component} from 'react';
import {Text,View, StyleSheet,Button} from 'react-native';
import PropTypes from 'prop-types';

export default class BarraNav extends Component{
    constructor(props){
       super(props);
    }
    
  
    
    render(){
        if(this.props.view == "listasAdd"){
            return(
                <View style = {estilo.barraTitulo}>
                    <Button
                    onPress = { () => { this.props.navigator.push({ id: 'listasAdd' }) }}
                    title = "Adicionar lista">
                    </Button>
                    <Button
                    onPress = { () => { this.props.navigator.push({ id: 'principal' }) }}
                    title = "Home">
                    </Button>
                </View>
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
                    title="Home">
                </Button>
            </View>
            );
        } else if(this.props.view == "add_itens_lista"){
            return(
                <View style={estilo.barraTitulo}>
                    <Button
                        onPress={() => { this.props.navigator.push({ id: 'add_itens_lista' }) }}
                        title="Adicionar item">
                    </Button>
                    <Text>R${this.props.soma_total_itens}</Text>
                    <Button
                        onPress={() => { this.props.navigator.push({ id: 'principal' }) }}
                        title="Home">
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
    }
})
