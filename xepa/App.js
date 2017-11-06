import React, {Component} from 'react';
import {
  View,
  Navigator
} from 'react-native';
import PropTypes from 'prop-types';
import ViewPrincipal from './/src//components//ViewPrincipal';
import ViewListas from './/src//components//ViewListas';
import ViewListasAdd from './/src//components//ViewListasAdd';
import ViewDispensa from './/src//components//ViewDispensa';
import ViewDispensaAdd from './/src//components//ViewDispensaAdd';
import ViewInicial from './/src//components//ViewInicial'
import './storage.js';

export default class App extends Component {
  render() {
    return (
      <Navigator style = {{flex: 1}}
        initialRoute = {{id: 'inicial'}} //Serve para definir a View inicial
        renderScene = {(route, navigator) => { //Lógica que realiza a transição entre Views
            switch(route.id){
              case 'inicial':
                return(<ViewInicial navigator = {navigator} data ={route.data}/>);
              case 'principal':
                return(<ViewPrincipal navigator = {navigator} data={route.data}/>);
              case 'listas' :
                return(<ViewListas navigator = {navigator} data={route.data}/>);
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
};
