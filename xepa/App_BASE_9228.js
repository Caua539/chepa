//Importações
import { AppRegistry, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react';

//Formatações:

export const Estilo = {

  botao: {
    backgroundColor: '#342E37',
    borderColor: '#FAFFFD',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#fff',
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

};

const botaoApertado = () => {

  var numeroAleatorio = Math.random() * 4;

  numeroAleatorio = Math.round(numeroAleatorio);

  var frases = ["Com a xepa, você vai ter controle sobre o seu dinheiro", "Economize já", "Em desenvolvimento", "Vai perder essa?", "Não há dia para economia!"];

  Alert.alert(frases[numeroAleatorio]);
};

//Classe principal: ("Main")
export default class App extends Component {
  constructor(props) {
    super(props)
  }
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

export class ImagemPrincipal extends Component {
  render() {
    return (
      <Image source={{ uri: 'https://warpzone.me/loja/wp-content/uploads/2016/05/icon-ecommerce-app.png' }}
        style={{ width: 200, height: 200 }}
      />
    );
  }
};

export class TextoBoasVindas extends Component {
  render() {
    return (
      <View>
        <Text style={Estilo.texto}>Bem vindo a xepa! </Text>
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
                style={Estilo.botao}
              >
                <Text style={Estilo.botaoTexto}>Comece a economizar já!</Text>
              </TouchableOpacity>
            </View>
      </View>
    );
  }
};





