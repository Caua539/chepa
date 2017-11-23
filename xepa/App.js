import React, {Component} from 'react';
import {
  View,
  Navigator,
  AsyncStorage,
  Console,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';
import ViewPrincipal from './/src//components//ViewPrincipal';
import ViewListas from './/src//components//ViewListas';
import ViewListasAdd from './/src//components//ViewListasAdd';
import ViewDispensa from './/src//components//ViewDispensa';
import ViewDispensaAdd from './/src//components//ViewDispensaAdd';
import ViewInicial from './/src//components//ViewInicial'
import './storage.js';

var rota;

  async function getItem(item) {
      try {
       return await AsyncStorage.getItem(item); 
      } catch (error) {
        Alert.alert("Objeto não recuperado com sucesso");
      }
    }
    
    async function setItem(key,item) {
      try {
        return await AsyncStorage.setItem(key, item); 
      } catch (error) {
        Alert.alert("Erro ao atualizar o objeto");
      }
    }

export default class App extends Component {
  componentWillMount(){
    var primeiroAcesso = getItem('welcome');
    console.log("flag:" + getItem('welcome'));

    if(primeiroAcesso == 'false'){
      rota = 'principal';
    } else{
      rota = 'inicial';
      setItem('welcome', 'false');
    }
  }

  render() {
    return (
      <Navigator style = {{flex: 1}}
        initialRoute = {{id: rota}} //Serve para definir a View inicial
        renderScene = {(route, navigator) => { //Lógica que realiza a transição entre Views
            switch(route.id){
              case 'inicial':
                return(<ViewInicial navigator = {navigator} data ={route.data} isFirstTime = {false}/>);
              case 'principal':
                return(<ViewPrincipal navigator = {navigator} data={route.data}/>);
              case 'listas' :
                return(<ViewListas navigator = {navigator} data={route.data}/>);
              case 'lista_individual' :
                return(<ViewListaIndividual navigator = {navigator} data={route.data}/>);  
              case 'listasAdd' :
                return(<ViewListasAdd navigator = {navigator} data={route.data}/>);
              case 'dispensa' :
                return(<ViewDispensa navigator = {navigator} data={route.data}/>);
              case 'dispensaAdd':
                return(<ViewDispensaAdd navigator = {navigator} data={route.data}/>);
            }
        }}
      />
    );
  }

  componentDidMount(){
    console.log("App.js didMount")
    
  }
};