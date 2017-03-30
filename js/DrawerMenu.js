import React, { Component, PropTypes } from 'react';

import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { menuItems } from './data.service';

import styles from '../css/menuStyle';


class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state={route: 0}
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(index) {
    this.props.navigate(index);
  }

  render() {
    return(
      <ScrollView style={styles.drawer}>
        <View style={styles.header} key={0}>
          <View style={styles.headerIcon} key={0}>
            <Icon name="md-alarm" size={50} color="#fff" />
          </View>
          <View style={styles.headerInfo} key={1}>
            <Text style={styles.headerTitle} key={0}>
              Lighthouses
            </Text>
            <Text style={styles.headerEmail} key={1}>
              pablodarde@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.content} key={1}>
          <View>
            {menuItems.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.listItem}
                onPress={this.navigateTo.bind(this, item.index)}
              >
                <Image source={{ uri: item.thumb}} style={styles.listItemImage} />
                <Text style={styles.listItemTitle}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

DrawerMenu.propTypes = {
  navigate: PropTypes.func.isRequired
}

export default DrawerMenu;
