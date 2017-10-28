//Importações
import {AppRegistry, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import React, {Component} from 'react';

//Formatações:

export const Estilo = {

  botao: {
    backgroundColor: '#342E37',
    borderColor: '#FAFFFD',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {width:2, height:0},
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
    width:400,
    height: 400

  },

  botaoAdd: {
    paddingTop: 50,
    alignItems: 'center'

  }

};

const botaoApertado = () => {

  var numeroAleatorio = Math.random()*4;

  numeroAleatorio = Math.round(numeroAleatorio);

  var frases = ["Com a xepa, você vai ter controle sobre o seu dinheiro", "Economize já", "Em desenvolvimento", "Vai perder essa?", "Não há dia para economia!" ];

  Alert.alert(frases[numeroAleatorio]);
};

//Componente principal
export default class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
              <View style = {Estilo.principal}>
                  <Image source = {{uri:'https://warpzone.me/loja/wp-content/uploads/2016/05/icon-ecommerce-app.png'}}
                         style = {{width: 200, height: 200}}
                  />

                  <Text style = {Estilo.texto}>Bem vindo a chepa! </Text>
                  <Text style = {Estilo.textoMenor}>Selecione uma lista recente ou clique em "+"
                  para começar a aeconomizar </Text>


                  <View style = {Estilo.viewBotoes}>
                        <TouchableOpacity onPress = {botaoApertado}
                                    style = {Estilo.botao}

                        >
                                <Text style = {Estilo.botaoTexto}>Lista 1</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress = {botaoApertado}
                                    style = {Estilo.botao}
                        >
                                <Text style = {Estilo.botaoTexto}>Lista 2</Text>
                        </TouchableOpacity>
                  </View>
                  <View style = {Estilo.viewBotoes}>
                    <TouchableOpacity onPress = {botaoApertado}
                                      style = {Estilo.botaoAdd}

                    >
                          <Image source = {{uri:'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png'}}
                                 style = {{width: 30, height: 30}}
                          />

                    </TouchableOpacity>
                  </View>
              </View>
    );
  }
};
