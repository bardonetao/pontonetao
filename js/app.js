const React = require('react');
const SideMenu = require('react-native-side-menu');
const Menu = require('./menu');

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

import styles from '../css/appStyle';
import BackgroundTimer from 'react-native-background-timer';

// Start a timer that runs continuous after X milliseconds
const intervalId = BackgroundTimer.setInterval(() => {
    // this will be executed every 200 ms
    // even when app is the the background
    console.log('tic');
    ToastAndroid.showWithGravity('Timeout 5000 for ever', ToastAndroid.SHORT, ToastAndroid.CENTER);
}, 5000);

// Cancel the timer when you are done with it
//BackgroundTimer.clearInterval(intervalId);

// Start a timer that runs once after X milliseconds
const timeoutId = BackgroundTimer.setTimeout(() => {
    // this will be executed once after 10 seconds
    // even when app is the the background
    console.log('tac');
    ToastAndroid.showWithGravity('Timeout 1000 one time', ToastAndroid.SHORT, ToastAndroid.CENTER);
}, 10000);

// Cancel the timeout if necessary
BackgroundTimer.clearTimeout(timeoutId);

module.exports = class pontonetao extends Component {

  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Ponto Netão!
          </Text>
          <Text style={styles.instructions}>
            Clique no botão abaixo para marcar o ponto. {'\n'}
          </Text>
          <Button handlePress={() => this.toggle()}/>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </View>
      </SideMenu>
    );
  }
};

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
