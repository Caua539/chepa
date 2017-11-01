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
            supermercado: ''
        };
    }

    persistirLista(numlista, nomeLista, valorOrcamento, supermercado) {
        try {
            var array = [nomeLista, valorOrcamento, supermercado];
            AsyncStorage.setItem(numLista, JSON.stringify(array));
            Alert.alert("Lista salva com sucesso!");
        }
        catch (error) {
            Alert.alert("Houve um erro ao salvar a lista");
        }

    }

    ID() { // Geração de ID que identifica unicamente uma lista 
        return Math.random().toString(36).substr(2, 9);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                    onPress={() => /*{
                        var numLista = this.ID()
                        this.setState({numLista: numLista })
                        this.persistirLista(this.state.numLista,this.state.nomeLista, this.state.valorOrcamento,
                            this.state.supermercado)
                        
                    }*/ {
                        var id = this.ID();
                        storage.save({
                            key: id,   // Note: Do not use underscore("_") in key!
                            data: {
                                nomeLista: this.state.nomeLista,
                                valorOrcamento: this.state.valorOrcamento,
                                supermercado: this.state.supermercado
                            }
                        });

                        this.props.navigator.push({ id: 'listas', data: id });
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
