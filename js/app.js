const React = require('react');
const SideMenu = require('react-native-side-menu');
const Menu = require('./menu');
const Realm = require('realm');
//const Store = require('../model/ponto');

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
import Pink from '../model/ponto';
import { ListView } from 'realm/react-native'

//let realm = new Realm({
  //schema: [{name: 'Ponto', properties: {data: 'string'}}], schemaVersion: 3
//})

let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
let pontos = Pink.objects('Pink').sorted('data');

module.exports = class pontonetao extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };

    constructor(props)
    {
      super(props);

      Pink.addListener('change', () => {
        this.setState({dataSource: ds.cloneWithRows(Pink.objects('Pink').sorted('data'))});
      });

      this.state = {
        dataSource: ds.cloneWithRows(pontos),
        items: pontos,
      };
      this.componentDidMount = this.componentDidMount.bind(this);

    }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.items),
    });
  }

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
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.data}</Text>}
          />
          <Text style={styles.welcome}>
         </Text>
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
    novo_ponto = new Date().toDateString();
    if (this.props.onPress) {
      this.props.onPress(e);
    }
    Alert.alert('Ponto marcado! \n'+ novo_ponto);
    Pink.createPonto(novo_ponto);
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
