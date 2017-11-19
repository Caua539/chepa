import React, { Component } from 'react';
import { Alert, AsyncStorage} from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class ViewInicial extends Component {
  constructor(props){
      super(props);
  }
  
  
  onSkipBtnHandle = () => {
    this.props.navigator.push({ id: 'principal'});        
  }
  doneBtnHandle = () => {
    this.props.navigator.push({ id: 'principal'}); 
  }
  nextBtnHandle = (index) => {
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Bem-vindo ao xepa!',
      description: 'Aqui você economiza de verdade',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Adicione a sua dispensa e comece a economizar já!',
      description: 'Com as suas listas e dispensas monitoradas pelo xepa, você terá mais controle do seu orçamento',
      img: require('xepa/resources/img/iconeTeste.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];

    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}