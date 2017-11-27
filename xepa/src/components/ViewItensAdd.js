import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Button,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    AsyncStorage,
    Keyboard
} from 'react-native';

import BarraNav from './/BarraNav';

export default class ViewItensAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeItem: '',
            valorUnitario: '',
            quantidade: ''
        };
    }

    ID() { // Geração de ID que identifica unicamente uma lista 
        return Math.random().toString(36).substr(2, 9);
    }

    render() {
        var id_item;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-between' }}>
                <StatusBar
                    hidden
                />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Text>Nome do item:</Text>
                    <TextInput
                        style={Estilo.texto}
                        onChangeText={(nomeItem) => this.setState({ nomeItem: nomeItem })}
                    />
                    <Text>Informe a quantidade:</Text>
                    <TextInput keyboardType={'numeric'}
                        style={Estilo.texto}
                        onChangeText={(quantidade) => this.setState(
                            { quantidade: quantidade })}
                    />
                    <Text>Informe o valor unitário:</Text>
                    <TextInput keyboardType={'numeric'}
                        style={Estilo.texto}
                        onChangeText={(valorUnitario) => this.setState(
                            { valorUnitario: valorUnitario })}
                    />
                    <View style ={{marginTop: 10}}>
                        <Button title="Salvar item na lista"
                            onPress={() => {
                                id_item = this.ID();
                                storage.save({
                                    key: id_item,   // Note: Do not use underscore("_") in key!
                                    data: {
                                        nomeItem: this.state.nomeItem,
                                        quantidade: this.state.quantidade,
                                        valorUnitario: this.state.valorUnitario    
                                    }
                                });
                                Keyboard.dismiss();
                                this.props.navigator.push({ id:'lista_individual', data:  id_item, valorOrcamento: this.props.valorOrcamento });
                            }
                            }
                        />
                    </View>
                   
                </View>
                <BarraNav navigator={this.props.navigator} />
            </View>


        );
    };
}

const Estilo = StyleSheet.create({
    texto: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }
});
