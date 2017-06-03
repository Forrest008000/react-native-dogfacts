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
import Login from './app/components/login';

export default class DogFacts extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('DogFacts', () => DogFacts);
