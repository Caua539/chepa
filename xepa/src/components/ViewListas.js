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
    this.state = {
      nomeLista: '',
      valorOrcamento: '',
      supermercado: '',
    };
  }

  componentDidMount() {
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

      }).then(ret => {
        this.setState({ nomeLista: ret.nomeLista });
        this.setState({ valorOrcamento: ret.valorOrcamento });
        this.setState({ supermercado: ret.supermercado });
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

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.nomeLista !== this.state.nomeLista ||
      nextState.valorOrcamento !== this.valorOrcamento ||
      nextState.supermercado !== this.supermercado)

  }


  render() {
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
        <Text> Nome: {this.state.nomeLista}</Text>
        <Text> Orçamento: {this.state.valorOrcamento}</Text>
        <Text> Local da compra: {this.state.supermercado}</Text>
      </View>
    );
  };
}

const Estilo = StyleSheet.create({})
