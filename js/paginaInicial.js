const React = require('react');

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  TouchableWithoutFeedback,
} = require('react-native');

const { Component } = React;

//import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from '../css/appStyle';


var PaginaInicial = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Ponto Netão!
          </Text>
          <Text style={styles.instructions}>
            Clique no botão abaixo para marcar o ponto. {'\n'}
          </Text>
          <Button handlePress={() => this.toggle()}/>
        </View>
    );
  }
});

class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
    //Alert.alert('Ponto marcado! \n'+ new Date().toDateString());
    ToastAndroid.showWithGravity('Ponto marcado! \n'+ new Date().toDateString(), ToastAndroid.SHORT, ToastAndroid.CENTER);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Image
          style={styles.buttonContainer}
          source={require('../img/fingerprint.png')}
        />
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = PaginaInicial;
