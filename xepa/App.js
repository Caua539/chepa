import React, {Component} from 'react';
import {
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';
import ViewPrincipal from './/src//components//ViewPrincipal';
import ViewListas from './/src//components//ViewListas';


export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{id: 'principal'}} //Serve para definir a View inicial
        renderScene = {(route, navigator) => { //Lógica que realiza a transição entre Views
            if(route.id === 'principal'){
              return(<ViewPrincipal prop1 = {navigator}/>);
            }
            if(route.id === 'listas'){
              return(<ViewListas/>);
            }
        }}
      />
    );
  }
};