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

export default class ViewListasEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id_lista,
            nomeLista: this.props.nomeLista,
            valorOrcamento: this.props.valorOrcamento,
            supermercado: this.props.supermercado
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
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <TextInput
                        style={Estilo.texto}
                        placeholder= {this.state.nomeLista}
                        onChangeText={(nomeLista) => this.setState({ nomeLista: nomeLista })}
                    />
                    <TextInput keyboardType={'numeric'}
                        style={Estilo.texto}
                        placeholder= {this.state.valorOrcamento}
                        onChangeText={(valorOrcamento) => this.setState(
                            { valorOrcamento: valorOrcamento })}
                    />
                    <TextInput
                        style={Estilo.texto}
                        placeholder={this.state.supermercado}
                        onChangeText={(supermercado) => this.setState({ supermercado: supermercado })}
                    />
                    <View style ={{marginTop: 10}}>
                        <Button title="Salvar edições"
                            onPress={() => {
                                id_lista = this.state.id
                                var i = listas.indexOf(id_lista);
                                listas.splice(i, 1);
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
                <BarraNav navigator={this.props.navigator} />
            </View>


        );
    };
}

const Estilo = StyleSheet.create({
    texto: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }
});
