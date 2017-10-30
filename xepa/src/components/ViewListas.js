import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Button
} from 'react-native';
import PropTypes from 'prop-types';

import BarraNav from './/BarraNav';

export default class ViewListas extends Component{
    render(){
        return(
            <View style = {{flex: 1}}>
              <StatusBar
                hidden
              />
              <BarraNav navigator = {this.props.navigator}/>
            </View>
        );
    };
}
