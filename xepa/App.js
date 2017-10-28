//Importações
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//Classe principal: ("Main")
export default class App extends Component<{}> {
  render() {
    return (
      <View style={Estilo.principal}>
        <ImagemPrincipal></ImagemPrincipal>
        <TextoBoasVindas></TextoBoasVindas>
        <Botao></Botao>
      </View>
    );
  }
};

export class ImagemPrincipal extends Component<{}> {
  render() {
    return (
      <View style = {Estilo.principal}>
          <Image source = {require('./resources/img/iconeTeste.png')}
                 style = {{width: 200, height: 200}}/>

          <Text style = {Estilo.texto}>Bem vindo ao Xepa!</Text>
          <Text style = {Estilo.textoMenor}>Selecione uma lista recente
            ou clique em "+" para começar a economizar</Text>

          <View style = {Estilo.viewBotoes}>
            <TouchableOpacity onPress = {botaoApertado}
              style = {Estilo.botao}>
                <Text style = {Estilo.botaoTexto}>Lista 1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {botaoApertado}
              style = {Estilo.botao}>
                <Text style = {Estilo.botaoTexto}>Lista 2</Text>
            </TouchableOpacity>
          </View>

          <View style = {Estilo.viewBotoes}>
            <TouchableOpacity onPress = {botaoApertado}
              style = {Estilo.botaoAdd}>
                <Image source = {require('./resources/img/sinal+.png')}
                  style = {{width: 30, height: 30}}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
};

export class TextoBoasVindas extends Component {
  render() {
    return (
      <View>
        <Text style={Estilo.texto}>Bem vindo a xepa!</Text>
      </View>
    );
  }
};

export class Botao extends Component {
  render() {
    return (
      <View>
            <View style={Estilo.viewBotoes}>
              <TouchableOpacity onPress={botaoApertado}
                style={Estilo.botao}>
                  <Text style={Estilo.botaoTexto}>Comece a economizar já!</Text>
              </TouchableOpacity>
            </View>
      </View>
    );
  }
};

//Formatações:
const Estilo = StyleSheet.create({
  botao: {
    backgroundColor: '#342E37',
    borderColor: '#FAFFFD',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {width:2, height:0},
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.4,
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30
  },

  botaoTexto: {
    color: 'white'
  },

  texto: {
    color: '#01161E',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 15
  },

  textoMenor: {
    textAlign: 'center',
    color: '#01161E',
    fontSize: 15,
    fontFamily: 'sans-serif',
    alignSelf: 'center',
    paddingTop: 15,
    paddingHorizontal: 20
  },

  principal: {
    backgroundColor: '#D4D2D5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  viewBotoes: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },

  imagem: {
    paddingTop: 40,
    width: 400,
    height: 400
  },

  botaoAdd: {
    paddingTop: 50,
    alignItems: 'center'
  }
});

const botaoApertado = () => {
  var numeroAleatorio = Math.random()*4;
  var numeroAleatorio = Math.random() * 4;

  numeroAleatorio = Math.round(numeroAleatorio);

  var frases = ["Com a xepa, você vai ter controle sobre o seu dinheiro", "Economize já", "Em desenvolvimento", "Vai perder essa?", "Não há dia para economia!"];

  Alert.alert(frases[numeroAleatorio]);
};
