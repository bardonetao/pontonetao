const React = require('react');
const DateFormat = require('dateformat');

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
import realm from '../model/ponto';
import {createPonto, getPontos} from '../model/ponto'
import { ListView } from 'realm/react-native'

let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
let pontos = getPontos();

class PaginaInicial extends Component {
  constructor(props)
  {
    super(props);
    // add listener when has changes
    realm.addListener('change', () => {
      this.setState({dataSource: ds.cloneWithRows(getPontos())});
    });

    // initial state
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
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.data}</Text>}
          />
        </View>
    );
  }
};

class Button extends Component {
  handlePress(e) {
    horario_ponto = DateFormat(new Date(), "dd-mm-yyyy | HH:MM:ss");
    if (this.props.onPress) {
      this.props.onPress(e);
    }
    //Alert.alert('Ponto marcado! \n'+ new Date().toDateString());
    ToastAndroid.showWithGravity('Ponto marcado! \n'+ horario_ponto, ToastAndroid.SHORT, ToastAndroid.CENTER);
    createPonto(horario_ponto);
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
