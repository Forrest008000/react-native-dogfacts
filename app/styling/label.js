/*
https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
Special thanks to that site for helping create these components
*/

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856'
  }
});

class Label extends Component {
  render() {
    return (
      <Text
        style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}
      >
        {props.text}
      </Text>
    );
  }
}

module.exports = Label;