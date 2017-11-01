import React, {Component} from 'react';
import {
  View
} from 'react-native';
import PropTypes from 'prop-types';

import { Navigator } from 'react-native-deprecated-custom-components';
import ViewPrincipal from './/src//components//ViewPrincipal';
import ViewListas from './/src//components//ViewListas';
import ViewListasAdd from './/src//components//ViewListasAdd';
import './storage.js';


export default class App extends Component {
  render() {
    return (
      <Navigator style = {{flex: 1}}
        initialRoute = {{id: 'principal'}} //Serve para definir a View inicial
        renderScene = {(route, navigator) => { //Lógica que realiza a transição entre Views
            if(route.id === 'principal'){
              return(<ViewPrincipal navigator = {navigator} data={route.data}/>);
            }
            if(route.id === 'listas'){
              return(<ViewListas navigator = {navigator} data={route.data}/>);
            }
            if(route.id === 'listasAdd'){
              return(<ViewListasAdd navigator = {navigator} data={route.data} />)
            }
        }}
      />
    );
  }
};
