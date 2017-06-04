/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Login from './app/components/login';
import Subscribe from './app/components/subscribe';

export default class DogFacts extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Login':
        return (
          <Login navigator={navigator} title='Login' />
        );
      case 'Subscribe':
        return (
          <Subscribe navigator={navigator} title='Subscribe' />
        );
    }
  }

  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{
          id: 'Subscribe'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
}

AppRegistry.registerComponent('DogFacts', () => DogFacts);
