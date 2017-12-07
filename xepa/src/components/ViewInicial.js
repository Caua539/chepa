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
      description: 'Se organize de maneira mais fácil e mais prática para suas compras',
      img: require('xepa/resources/img/Ativo5.png'),
      imgStyle: {
        width: 130 * 2.5,
      },
      level: 10,
    }, {
      title: 'Comece a utilizar o app já e veja suas economias durarem mais!',
      description: 'Controle a sua dispensa, suas listas de compras e seu orçamento com o Xepa!',
      imgStyle: {
      },
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