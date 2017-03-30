const React = require('react');
const Timer = require('./bgTimer');

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  TouchableWithoutFeedback,
  Navigator,
  BackAndroid,
  DrawerLayoutAndroid,
  ToolbarAndroid
} = require('react-native');

const { Component } = React;

import styles from '../css/appStyle';
import BackgroundTimer from 'react-native-background-timer';

Timer.bgTimeoutStart(5000);


import Icon from 'react-native-vector-icons/Ionicons';
import { routes, toolbarActions } from './data.service';
import PaginaInicial from './paginaInicial'
import PaginaHistorico from './paginaHistorico'
import DrawerMenu from './DrawerMenu'


import { Router, Route, Schema, Actions, } from 'react-native-router-flux'


module.exports = class pontonetao extends Component {

  constructor(props) {
      super(props);
      this.state = {
        routes: [0],
        drawerClosed: true,
      }
      this.toggleDrawer = this.toggleDrawer.bind(this);
      this._onActionSelected = this._onActionSelected.bind(this);
      this.navigateTo = this.navigateTo.bind(this);
      this.setDrawerState = this.setDrawerState.bind(this);
      this.handlesBackButton = this.handlesBackButton.bind(this);
    }

    _onActionSelected(position) {
      switch (position) {
        case 0:
          this.navigateTo(7);
        break;
        case 1:
          this.navigateTo(8);
        break;
      }
    }

    toggleDrawer() {
      if (this.state.drawerClosed) {
        this.DRAWER.openDrawer();
      } else {
        this.DRAWER.closeDrawer();
      }
    }

    setDrawerState() {
      this.setState({
        drawerClosed: !this.state.drawerClosed
      });
    }

    navigateTo(idx) {
      this.DRAWER.closeDrawer();
      let _routes = this.state.routes.slice();
      let hasRoute = false;
      if (idx === 0) {
        this._navigator.resetTo(routes[0]);
        this.setState({
          routes: [0]
        });
      } else {
        _routes.some((item, index) => {
          if (item === idx) {
            this._navigator.popN(_routes.length -1 - index);
            _routes = this.state.routes.slice(0, index + 1);
            hasRoute = true;
          }
        });
        if (!hasRoute) {
          this._navigator.push(routes[idx]);
        }
        this.setState({
          routes: hasRoute === true ? _routes : [ ...this.state.routes, idx]
        });
      }
    }

    handlesBackButton() {
      if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {
        try {
          this._navigator.pop();
          const _routes = this.state.routes.slice();
          _routes.pop();
          this.setState({
            routes: _routes
          });
        } catch(e) {}
        return true;
      }
      return false;
    }

    componentWillMount(){
      BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
    }

    componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
    }

  render() {
    return (

      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(drawerElement) => { this.DRAWER = drawerElement; }}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}
        renderNavigationView={() => <DrawerMenu navigate={this.navigateTo} />}
      >
        <Icon.ToolbarAndroid
          titleColor='#fff'
          // title='Lighthouses'
            //--> Remove the View child of the Toolbar if you
            // don't need a Icon.
          navIconName='md-menu'
          onIconClicked={this.toggleDrawer}
          actions={toolbarActions}
          onActionSelected={this._onActionSelected}
          style={styles.appBar}
          overflowIconName="md-more"
        >
          <View style={styles.appBarLogo}>
            <TouchableOpacity
              onPress={this.navigateTo.bind(this, 0)}
            >
              <Icon name="md-alarm" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
              style={styles.appBarTitle}
              numberOfLines={1}
            >
              {routes[this.state.routes[this.state.routes.length - 1]].title}
            </Text>
          </View>
        </Icon.ToolbarAndroid>
        <Navigator
            initialRoute={routes[0]}
            renderScene={(route, navigator) => {
              const idx = route.index - 1;
              switch (route.index) {
                case 0:
                  return <PaginaInicial />;
                case 1:
                  return <PaginaHistorico index={idx} />;
                default:
                  return <PaginaInicial />;
              }
            }}
            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.FloatFromRight
            }
            ref={(nav) => { this._navigator = nav; }}
        />
      </DrawerLayoutAndroid>
    );
  }
};
