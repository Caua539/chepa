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
        listas_armazenadas.push([ret.nomeLista, ret.valorOrcamento, ret.supermercado]);

        this.qtd_listas = listas_armazenadas.length;
        
            if (this.qtd_listas !== 0) {
              exibicaoListas = listas_armazenadas.map(
                function (array_interno) {
                  return array_interno.map(function (elemento) {
                    return <Text>{elemento}</Text>
                  })
                })
                this.forceUpdate();
            } else {
              console.log("Caiu no else");
              exibicaoListas = <Text>Não há listas cadastradas! Que tal adicionar uma agora?</Text>
            }

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


  render() {
    if(this.qtd_listas == 0){
      exibicaoListas = <Text>Não há listas cadastradas! Que tal adicionar uma agora?</Text>
    }
    console.log("Render iniciado");
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
