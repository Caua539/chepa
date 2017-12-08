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

export default class ViewDispensaAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeItem: '',
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
                <BarraNav navigator={this.props.navigator} />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Text>Informe o nome do item:</Text>
                    <TextInput
                        style={Estilo.texto}
                        onChangeText={(nomeItem) => this.setState({ nomeItem: nomeItem })}
                    />
                    <Text>Informe a quantidade de itens:</Text>
                    <TextInput keyboardType={'numeric'}
                        style={Estilo.texto}
                        onChangeText={(quantidade) => this.setState(
                            { quantidade: quantidade })}
                    />
                    <View style ={{marginTop: 10}}>
                        <Button title="Salvar item"
                            onPress={() => {
                                id_item = this.ID();
                                storage.save({
                                    key: id_item,   // Note: Do not use underscore("_") in key!
                                    data: {
                                        nomeItem: this.state.nomeItem,
                                        quantidade: this.state.quantidade    
                                    }
                                });
                                Keyboard.dismiss();
                                this.props.navigator.push({ id: 'dispensa', data:  id_item });
                            }
                            }
                        />
                    </View>
                   
                </View>
            </View>


        );
    };
}

const Estilo = StyleSheet.create({
    texto: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }
});
