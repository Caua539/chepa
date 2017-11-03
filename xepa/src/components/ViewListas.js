import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Button,
  StyleSheet,
  AsyncStorage,
  Text
} from 'react-native';

import PropTypes from 'prop-types';
import BarraNav from './/BarraNav';


export default class ViewListas extends Component {

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
        listas_armazenadas[this.props.data] = [ret.nomeLista, ret.valorOrcamento, ret.supermercado];
        listas_armazenadas.length = listas_armazenadas.length + 1;
        this.qtd_listas = listas_armazenadas.length;
        listas.push(this.props.data);
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


    console.log("WillMount executado");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        atualizar: true
      })
    }
    console.log("WillReceiveProps executado");
  }


  listagemListas(id) {
  if (this.qtd_listas !== 0) {
              return <View>
                        <Text>Nome da lista: {listas_armazenadas[id][0]}</Text>
                        <Text>Orçamento: {listas_armazenadas[id][1]}</Text>
                        <Text>Supermercado: {listas_armazenadas[id][2]}</Text>
                      </View>
    
  } else {
    return <Text>Não há listas cadastradas! Que tal adicionar uma agora?</Text>
  }
}

  render() {
  var exibicaoListas = [];

  for (var i = 0; i < listas.length; i++) {
    exibicaoListas[i] = this.listagemListas(listas[i]);
  } 

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          hidden
        />
        <BarraNav navigator={this.props.navigator} />
        <Button
          onPress={() => { this.props.navigator.push({ id: 'listasAdd' }) }}
          title="Adicionar lista">
        </Button>
        {exibicaoListas}
      </View>
    );
  };
}

const Estilo = StyleSheet.create({})
