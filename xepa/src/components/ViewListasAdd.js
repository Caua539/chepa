import React, {Component} from 'react';
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
 
export default class ViewListasAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {  nomeLista: 'Informe o nome da lista', 
                        valorOrcamento: 'Informe o orçamento para a lista',
                        supermercado: 'Informe o supermercado',
                         };
      }
    
    render(){
        return(
            <View style = {{flex: 1}}>
              <StatusBar
                hidden
              /> 
              <BarraNav navigator = {this.props.navigator}/> 
              <Text>Informe o nome da lista:</Text>
              <TextInput
                    style={Estilo.texto}
                    onChangeText={(text) => this.setState({text})}
                    />
              <Text>Informe o valor do orçamento:</Text>
              <TextInput keyboardType = {'numeric'}
                    style={Estilo.texto}
                    onChangeText={(text) => this.setState({text})}
                    />
              <Text> Informe o supermercado:</Text>
              <TextInput
                    style={Estilo.texto}
                    onChangeText={(text) => this.setState({text})}
                    />
              <Button title = "Salvar lista"
                      onPress = {adicionaLista(this.state.nomeLista, this.state.valorOrcamento, this.state.supermercado)}

              /> 
            </View>
        );
    };
}

const adicionaLista = async (nomeLista, valorOrcamento, supermercado ) =>  {
    try {
        await AsyncStorage.setItem('nomeLista', nomeLista);
        await AsyncStorage.setItem('valorOrcamento', valorOrcamento);
        await AsyncStorage.setItem('supermercado', supermercado);
      
    } catch (error) {
        Alert.alert("Houve um erro ao salvar os dados");
      }
}

const Estilo = StyleSheet.create({

    texto: {height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}

});
