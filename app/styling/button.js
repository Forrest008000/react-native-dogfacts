/*
https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
Special thanks to that site for helping create these components
*/

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});

class Button extends Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    if (props.children) {
      return props.children;
    }

    return (
      <Text style={props.styles.label}>
        {props.label}
      </Text>
    );
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="#ccc"
        onPress={props.onPress}
        style={[
          props.noDefaultStyles ? '' : styles.button,
          props.styles ? props.styles.button : '']}
      >
        {getContent()}
      </TouchableHighlight>
    );
  }
}

module.exports = Button;