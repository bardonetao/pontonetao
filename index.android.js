/**
 * Ponto Netao
 * @cgomestw
 * @jlimo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  //Button,
  Image,
  TouchableOpacity
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
        <TouchableOpacity onPress={this._onPress}>
          <Image
            style={styles.buttonContainer}
            source={require('./img/fingerprint.png')}
          />
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Clique no botão acima para marcar o ponto. {'\n'}
        </Text>
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
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 20,
    width: 200,
    height: 200,
    //resizeMode: 'contain',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});

// Removed for testing TouchableOpacity component
//<Text style={styles.instructions}>
//<Button onPress={this._onPress} title="Manda Bala!" accessibilityLabel="Clique aqui para bater o ponto"/>
//<View style={styles.buttonContainer}>
//<Image style={styles.logo} source={require('./img/ponto.png')} />

AppRegistry.registerComponent('pontonetao', () => pontonetao);
