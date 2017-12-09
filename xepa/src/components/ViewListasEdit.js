import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Button,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    Picker,
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
            supermercado: this.props.supermercado,
            status: this.props.status
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
                    <Picker
                        selectedValue={this.state.status}
                        onValueChange={(status, itemIndex) => this.setState({status: status})}>
                        <Picker.Item label="Aberta" value="aberta" />
                        <Picker.Item label="Fechada" value="fechada" />
                    </Picker>
                    <View style ={{marginTop: 10}}>
                        <Button title="Salvar edições"
                            onPress={() => {
                                if(this.state.status == "fechada"){
                                    Alert.alert(
                                    'Atenção',
                                    'A lista será fechada, com isso, seus dados não poderão ser mais editados até sua abertura. Deseja prosseguir?',
                                    [
                                        {text: 'Cancel', onPress: () => {
                                            this.props.navigator.push({ id: 'lista_editar', id_lista: id_lista, nomeLista: listas_armazenadas[id_lista][0], 
                                            valorOrcamento: listas_armazenadas[id_lista][1], supermercado: listas_armazenadas[id_lista][2]});
                                        }, style: 'cancel'},
                                        {text: 'Sim', onPress: () => {
                                            id_lista = this.state.id
                                            var i = listas.indexOf(id_lista);
                                            listas.splice(i, 1);
                                            storage.save({
                                                key: id_lista,   // Note: Do not use underscore("_") in key!
                                                data: {
                                                    nomeLista: this.state.nomeLista,
                                                    valorOrcamento: this.state.valorOrcamento,
                                                    supermercado: this.state.supermercado,
                                                    status: this.state.status
                                                }
                                            });
                                        }}])
                                }else{
                                    id_lista = this.state.id
                                    var i = listas.indexOf(id_lista);
                                    listas.splice(i, 1);
                                    storage.save({
                                        key: id_lista,   // Note: Do not use underscore("_") in key!
                                        data: {
                                            nomeLista: this.state.nomeLista,
                                            valorOrcamento: this.state.valorOrcamento,
                                            supermercado: this.state.supermercado,
                                            status: this.state.status
                                        }
                                    });
                                     
                                    Keyboard.dismiss();
                                    this.props.navigator.push({ id: 'listas', data: id_lista });
                                }
                            }
                            }
                        />
                    </View>
                     <View style ={{marginTop: 100, width: 230, marginLeft: 140}}>
                        <Button
                            color='#ff5c5c'
                            title="Excluir Lista"
                            onPress = {() => {
                            //this.forceUpdate();
                            id_lista = this.state.id
                            Alert.alert(
                            'Atenção',
                            'Deseja confirmar exclusão da lista?',
                            [
                                {text: 'Cancel', onPress: () => {
                                    this.props.navigator.push({ id: 'lista_editar', id_lista: id_lista, nomeLista: listas_armazenadas[id_lista][0], 
                                    valorOrcamento: listas_armazenadas[id_lista][1], supermercado: listas_armazenadas[id_lista][2], status: listas_armazenadas[id_lista][3]});
                                }, style: 'cancel'},
                                {text: 'OK', onPress: () => {
                                    storage.remove({
                                    key: id_lista
                                    }).then((ret) => {
                                    var i = listas.indexOf(id_lista);
                                    listas.splice(i, 1);
                                    var j = itens_dispensa.indexOf(id_lista);
                                    listas_armazenadas.splice(j, 1);
                                    this.props.navigator.push({ id: 'listas'});
                                    }).catch(err => {
                                    console.warn(err.message);
                                    switch (err.name) {
                                        case 'NotFoundError':
                                        Alert.alert("Não foi possível excluir");
                                        break;
                                    }
                                })
                                }},
                            ],
                            { cancelable: false }
                            )
                            }}/>
                     </View>
                </View>
            </View>


        );
    };
}

const Estilo = StyleSheet.create({
    texto: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }
});
