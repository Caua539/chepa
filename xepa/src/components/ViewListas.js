import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  Text,
  ScrollView
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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        atualizar: true
      })
    }
  }


  listagemListas(id) {
  if (this.qtd_listas !== 0) {
    return <Card>
              <CardTitle>
                  <Text style={styles.title}>{listas_armazenadas[id][0]}</Text>
              </CardTitle>
              <CardContent>
                  <Text style = {styles.orcamentoTexto}>Orçamento: R${listas_armazenadas[id][1]}</Text>
                  <Text>Supermercado: {listas_armazenadas[id][2]}</Text>
              </CardContent>
              <CardAction>
                    <Button onPress = {() => {}} style={styles.button}>
                      Ver
                    </Button>
                    <Button onPress = {() => {}} style={styles.button}>
                      Excluir
                    </Button>
              </CardAction>
            </Card>
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
      <View style={{ flex: 1, backgroundColor:'#FFF' }}>
        <StatusBar
          hidden
        />
        <ScrollView>
          {exibicaoListas}
        </ScrollView>
        <BarraNav navigator={this.props.navigator} view = "listasAdd" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
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
  }
});
