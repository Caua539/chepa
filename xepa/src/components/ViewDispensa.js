import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  Text,
  Image,
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



export default class ViewDispensa extends Component {

  constructor(props) {
    super(props);
    this.qtd_itens = 0;
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
        itens_dispensa[this.props.data] = [ret.nomeItem, ret.quantidade];
        itens_dispensa.length = itens_dispensa.length + 1;
        this.qtd_itens = itens_dispensa.length;
        itens.push(this.props.data);
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


  listagemItems(id) {
    return <Card styles={{ card: { backgroundColor: '#FFF' } }}>
      <CardAction>
        <View style = {styles.botoesItem}>
          <Text style={styles.title}>{itens_dispensa[id][0]}</Text>
          <Button onPress={() => {
            for (let item of itens) {
              if (item == id) {
                itens_dispensa[id][1]--;
              }
            }
            this.forceUpdate();
          }} style={styles.button}>
            -
          </Button>
          <Text style={styles.title}>{itens_dispensa[id][1]}</Text>
          <Button onPress={() => {
            for (let item of itens) {
              if (item == id) {
                itens_dispensa[id][1]++;
              }
            }
            this.forceUpdate();
          }} style={styles.button}>
            +
          </Button>
          <Button onPress={() => {
            this.forceUpdate();
            for (let item of itens) {
              if (item == id) {
                storage.remove({
                  key: id
                }).then((ret) => {
                  var i = itens.indexOf(id);
                  itens.splice(i, 1);
                  var j = itens_dispensa.indexOf(id);
                  itens_dispensa.splice(j, 1);
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
            <Image source={require('xepa/resources/img/garbage-icon.png')}
                   style={{width: 15, height: 15}} /> 
          </Button>
        </View>
      </CardAction>
    </Card>
  }



render() {
  var exibicaoItens = [];
  if(itens.length !== 0){
    for (let item of itens) {
        exibicaoItens.push(this.listagemItems(item));
    } 
  } else{
    exibicaoItens[0] = 
    <View style = {styles.semlistasView}> 
        <Text style = {styles.semlistas}>Não há itens na dispensa! Que tal adicionar os itens agora?</Text>
    </View>
  }
    return (
      <View style={{ flex: 1, backgroundColor:'#CCC' }}>
        <BarraNav navigator={this.props.navigator} view = "principal" />
        <StatusBar
          hidden
        />
        <ScrollView>
          {exibicaoItens}
        </ScrollView>
        <BarraNav navigator={this.props.navigator} view = "dispensa" />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 20
  },
  orcamentoTexto:{
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10,
    width: 30,
    height: 30,
    backgroundColor: '#056B05'
  },
  semlistas: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 250 
  },
  semlistasView:{
    flex: 1,
    flexDirection: 'row',
  },
  botoesItem: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
});
