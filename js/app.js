const React = require('react');
const SideMenu = require('react-native-side-menu');
const Menu = require('./menu');
const Realm = require('realm')
const Store = require('../model/ponto')

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
import store  from '../model/ponto.js';

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
  saveData = (id, novo_ponto) => {
    Store.createPonto(id, novo_ponto)
  }

  handlePress(e) {
    novo_ponto = new Date();
    if (this.props.onPress) {
      this.props.onPress(e);
    }
    Alert.alert('Ponto marcado! \n'+ novo_ponto);
    this.saveData(20, novo_ponto) //TODO: random id
    //TODO: verify ponto is really storage
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
