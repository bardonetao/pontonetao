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
} = require('react-native');
const { Component } = React;

import styles from '../css/appStyle';

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
    Alert.alert('Ponto marcado! \n'+ new Date().toDateString());
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
