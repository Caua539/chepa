import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
  Image,
  Text,
  Alert,
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
        listas_armazenadas[this.props.data] = [ret.nomeLista, ret.valorOrcamento, ret.supermercado, ret.status];
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
    return <Card styles={{ card: { backgroundColor: '#FFF' }}}>
              <CardTitle>
                  <Text style={styles.title}>{listas_armazenadas[id][0]}</Text>
              </CardTitle>
              <CardAction>
                    <Button onPress = {() => {
                      this.props.navigator.push({ id: 'lista_individual', valorOrcamento: listas_armazenadas[id][1]});
                    }} style={styles.button}>
                      Ver
                    </Button>
                    <Button onPress = {() => {
                      this.props.navigator.push({ id: 'lista_editar', id_lista: id, nomeLista: listas_armazenadas[id][0], 
                      valorOrcamento: listas_armazenadas[id][1], supermercado: listas_armazenadas[id][2], status: listas_armazenadas[id][3]});
                    }} style={styles.button}>
                      Editar
                    </Button>
              </CardAction>
            </Card>
}

  render() {
  var exibicaoListas = [];

  if(listas.length !== 0){
    for (var i = 0; i < listas.length; i++) {
      exibicaoListas[i] = this.listagemListas(listas[i]);
    } 
  } else{
    exibicaoListas[0] = 
    <View style = {styles.semlistasView}> 
    <Text style = {styles.semlistas}>Não há listas cadastradas! Que tal adicionar uma agora?</Text>
    </View>
  }
  

    return (
      <View style={{ flex: 1, backgroundColor:'#CCC' }}>
        <BarraNav navigator={this.props.navigator} view = "principal" />
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
    fontSize: 20,
    marginLeft: 0,
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
  }
});
