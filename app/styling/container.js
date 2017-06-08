/*
https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
Special thanks to that site for helping create these components
*/

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 20
  }
});

class Container extends Component {
  constructor(props) {
    super(props);
  };

  render() {
  return (
    <View style={styles.labelContainer}>
      {props.children}
    </View>
  );
  }

}

module.exports = Container;