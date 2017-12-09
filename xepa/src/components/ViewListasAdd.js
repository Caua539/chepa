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

export default class ViewListasAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeLista: '',
            valorOrcamento: '',
            supermercado:'',
            status: 'aberta'
        };
    }

    ID() { // Geração de ID que identifica unicamente uma lista 
        return Math.random().toString(36).substr(2, 9);
    }

    render() {
        var id_lista;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'space-between', paddingTop: 20 }}>
                <StatusBar
                    hidden
                />
                <BarraNav navigator={this.props.navigator} />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <TextInput
                        style={Estilo.texto}
                        placeholder="Nome da lista"
                        onChangeText={(nomeLista) => this.setState({ nomeLista: nomeLista })}
                    />
                    <TextInput keyboardType={'numeric'}
                        style={Estilo.texto}
                        placeholder= "Valor do orçamento"
                        onChangeText={(valorOrcamento) => this.setState(
                            { valorOrcamento: valorOrcamento })}
                    />
                    <TextInput
                        style={Estilo.texto}
                        placeholder="Supermercado"
                        onChangeText={(supermercado) => this.setState({ supermercado: supermercado })}
                    />
                    <View style ={{marginTop: 10}}>
                        <Button title="Salvar lista"
                            onPress={() => {
                                id_lista = this.ID();
                                storage.save({
                                    key: id_lista,   // Note: Do not use underscore("_") in key!
                                    data: {
                                        nomeLista: this.state.nomeLista,
                                        valorOrcamento: this.state.valorOrcamento,
                                        supermercado: this.state.supermercado
                                    }
                                });
                                Keyboard.dismiss();
                                this.props.navigator.push({ id: 'listas', data: id_lista });
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
