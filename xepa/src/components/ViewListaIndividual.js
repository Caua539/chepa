import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  Text,
  ScrollView,
  Alert
} from 'react-native';

import PropTypes from 'prop-types';
import BarraNav from './/BarraNav';
import Button from 'apsl-react-native-button';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';


export default class ViewListaIndividual extends Component {

  constructor(props) {
    super(props);
    this.qtd_listas = 0;
  }

  componentWillMount() { //Método chamado antes da renderização

    if (this.props.data !== null && this.props.data !== undefined) {
      storage.load({
        key: this.props.data,

        // autoSync(default true) means if data not found or expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground(default true) means if data expired,
        // return the outdated data first while invoke the sync method.
        // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
        syncInBackground: true

      }).then((ret) => {
        itens_lista[this.props.data] = [ret.nomeItem, ret.quantidade, ret.valorUnitario];
        itens_lista.length = itens_lista.length + 1;
        this.qtd_itens = itens_lista.length;
        ids_itens_lista.push(this.props.data);
        this.forceUpdate();
      }).catch(err => {
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            Alert.alert("Dados não encontrados");
            break;
          case 'ExpiredError':
            Alert.alert("Tempo expirado");
            break;
        }
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        atualizar: true
      })
    }
  }


  listagemItens(id) {
    return <Card styles={{ card: { backgroundColor: '#FFF' }}}>
    <CardTitle>
        <Text style={styles.title}>{itens_lista[id][0]} x {itens_lista[id][1]}</Text>
    </CardTitle>
    <CardContent>
        <Text style = {styles.orcamentoTexto}>Valor unitário: R$ {itens_lista[id][2]} </Text>
    </CardContent>
    <CardAction>
    <View style = {styles.botoesItem}>
          <Button onPress={() => {
            for (let item of ids_itens_lista){
              if (item == id){
                itens_lista[id][1]--;
              }
            }
            this.forceUpdate();
          }} style={styles.button}>
            -
          </Button>
          <Button onPress={() => {
            this.forceUpdate();
            for (let item of ids_itens_lista) {
              if (item == id) {
                storage.remove({
                  key: id
                }).then((ret) => {
                  var i = ids_itens_lista.indexOf(id);
                  ids_itens_lista.splice(i, 1);
                  var j = itens_lista.indexOf(id);
                  itens_lista.splice(j, 1);
                  this.forceUpdate();
                }).catch(err => {
                  console.warn(err.message);
                  switch (err.name) {
                    case 'NotFoundError':
                      Alert.alert("Não foi possível excluir");
                      break;
                  }
                })
              }
            }
          }} style={styles.button}>
            Excluir
          </Button>

          <Button onPress={() => {
            for (let item of ids_itens_lista) {
              if (item == id) {
                itens_lista[id][1]++;
              }
            }
            this.forceUpdate();
          }} style={styles.button}>
            +
          </Button>
        </View>
    </CardAction>
  </Card>
}

  render() {
  var exibicaoItens = [];
  var somaTotal = 0;

  if(ids_itens_lista.length !== 0){
    for (var i = 0; i < ids_itens_lista.length; i++) {
      exibicaoItens[i] = this.listagemItens(ids_itens_lista[i]);
      if (somaTotal >= this.props.valorOrcamento){
        Alert.alert("O orçamento foi estourado! Por favor, exclua um item ou diminua a quantidade de um item")
      } else{
        somaTotal = parseInt(somaTotal) + parseInt(itens_lista[ids_itens_lista[i]][2] * 
          itens_lista[ids_itens_lista[i]][1]);
      }
    } 
  } else{
    exibicaoItens[0] = 
    <View style = {styles.semlistasView}> 
    <Text style = {styles.semlistas}>Não há itens na lista! Que tal adicionar agora?</Text>
    </View>
  }
  
    return (
      <View style={{ flex: 1, backgroundColor:'#CCC' }}>
        <StatusBar
          hidden
        />
        <ScrollView>
          {exibicaoItens}
        </ScrollView>
        <BarraNav navigator={this.props.navigator} view = "add_itens_lista" 
        soma_total_itens = {this.props.valorOrcamento} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    backgroundColor: 'transparent'
  },
  orcamentoTexto:{
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10,
    width: 75,
    backgroundColor: '#056B05'
  },
  semlistas: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 250,
    width: 200
  },
  semlistasView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoesItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
}
});
