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
    
    persistirLista(nomeLista, valorOrcamento, supermercado) {
        try{
            AsyncStorage.setItem("nomeLista", nomeLista);
            AsyncStorage.setItem("valorOrcamento", valorOrcamento);
            AsyncStorage.setItem("supermercado", supermercado);
            Alert.alert("Lista salva com sucesso!");
        } 
        
        catch (error) {
            Alert.alert("Houve um erro ao salvar a lista");
        }

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
                      onPress = {() => {
                          this.persistirLista(this.state.nomeLista, this.state.valorOrcamento, 
                          this.state.supermercado)
                          
                          this.props.navigator.pop();
                          
                          }}

              /> 
            </View>

            
        );
    };
}

const Estilo = StyleSheet.create({

    texto: {height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}

});
