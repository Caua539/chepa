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
    Keyboard, 
    Picker
} from 'react-native';

import BarraNav from './/BarraNav';

export default class ViewItensAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeItem: '',
            valorUnitario: '',
            quantidade: '',
            prioridade: ''
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
                    <Text>Qual a prioridade do item?</Text>
                    <Picker
                        selectedValue={this.state.prioridade}
                        onValueChange={(itemValue, itemIndex) => this.setState({prioridade: itemValue})}>
                        <Picker.Item label="Muito alta" value="8" />
                        <Picker.Item label="Alta" value="6" />
                        <Picker.Item label="Médio" value="4" />
                        <Picker.Item label="Baixa" value="2" />
                        <Picker.Item label="Muito baixa" value="0" />
                    </Picker>
                    <View style ={{marginTop: 10}}>
                        <Button title="Salvar item na lista"
                            onPress={() => {
                                id_item = this.ID();
                                storage.save({
                                    key: id_item,   // Note: Do not use underscore("_") in key!
                                    data: {
                                        nomeItem: this.state.nomeItem,
                                        quantidade: this.state.quantidade,
                                        valorUnitario: this.state.valorUnitario,
                                        prioridade: this.state.prioridade    
                                    }
                                });
                                Keyboard.dismiss();
                                this.props.navigator.push({ id:'lista_individual', data:  id_item, valorOrcamento: this.props.valorOrcamento });
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
