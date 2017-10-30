import React, {Component} from 'React';
import {Text,View, StyleSheet,Button} from 'react-native';
import PropTypes from 'prop-types';

export default class BarraNav extends Component{
    render(){
        return(
            <View style = {estilo.barraTitulo}>
                <Button
                onPress = { () => {this.props.navigator.pop()}}
                title = "Voltar"></Button>
                <Text style ={estilo.estiloTexto}>Economize já!</Text>
            </View>
        );
    };
}

const estilo = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#ccc',
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
