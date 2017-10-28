import React, {Component} from 'React';
import {Text,View, StyleSheet} from 'react-native';

export default class BarraNav extends Component{
    render(){
        return(
            <View style = {estilo.barraTitulo}>
                <Text>Testando</Text>
            </View>
        );
    };
}


const estilo = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#fff',
        padding: 5,
        marginBottom: 10
    }
})