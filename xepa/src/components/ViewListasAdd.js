import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Button,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    AsyncStorage
} from 'react-native';

import BarraNav from './/BarraNav';

export default class ViewListasAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeLista: '',
            valorOrcamento: '',
            supermercado:''
        };
    }

    ID() { // Geração de ID que identifica unicamente uma lista 
        return Math.random().toString(36).substr(2, 9);
    }

    render() {
        var id_lista;
        return (
            <View style={{ flex: 1 , backgroundColor: '#fff'}}>
                <StatusBar
                    hidden
                />
                <BarraNav navigator={this.props.navigator} />
                <Text>Informe o nome da lista:</Text>
                <TextInput
                    style={Estilo.texto}
                    onChangeText={(nomeLista) => this.setState({ nomeLista: nomeLista })}
                />
                <Text>Informe o valor do orçamento:</Text>
                <TextInput keyboardType={'numeric'}
                    style={Estilo.texto}
                    onChangeText={(valorOrcamento) => this.setState(
                        { valorOrcamento: valorOrcamento })}
                />
                <Text> Informe o supermercado:</Text>
                <TextInput
                    style={Estilo.texto}
                    onChangeText={(supermercado) => this.setState({ supermercado: supermercado })}
                />
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

                        this.props.navigator.push({ id: 'listas', data: id_lista});
                    }
                    }



                />
            </View>


        );
    };
}

const Estilo = StyleSheet.create({
    texto: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }
});
