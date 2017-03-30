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

import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from '../css/appStyle';
import realm from '../model/ponto';
import {createPonto, getPontos} from '../model/ponto'
import { ListView } from 'realm/react-native'

let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
let pontos = getPontos();

  class PaginaHistorico extends Component {
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
            Histórico de Marcações
          </Text>
          <Text style={styles.instructions}>
            Veja abaixo os pontos marcados. {'\n'}
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.data}</Text>}
          />
        </View>
    );
  }
};

module.exports = PaginaHistorico;
