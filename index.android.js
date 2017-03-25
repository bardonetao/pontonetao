/**
 * Ponto Netao
 * @cgomestw
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image
} from 'react-native';

export default class pontonetao extends Component {

  _onPress() {
    Alert.alert('Ponto marcado! \n'+ new Date().toDateString());
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Ponto Netão!
        </Text>
        <Image style={styles.logo} source={require('./img/ponto.png')} />
        <Text style={styles.instructions}>
          Clique no botão abaixo para marcar o ponto. {'\n'}
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Manda Bala!" accessibilityLabel="Clique aqui para bater o ponto"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#3399ff',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    //backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});

AppRegistry.registerComponent('pontonetao', () => pontonetao);
