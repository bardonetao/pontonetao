const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

import styles from '../css/menuStyle';

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Your name</Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('About')}
          style={styles.item}>
          About
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Contacts')}
          style={styles.item}>
          Contacts
        </Text>
      </ScrollView>
    );
  }
};
