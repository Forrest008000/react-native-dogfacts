import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000'
  },
  prompt: {
    color: '#cf0000',
    fontSize: 25
  },
  loginInputs: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40
  },
  loginButton: {
    color: 'red',
  }
});

class Subscribe extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Lol
        </Text>
      </View>
    )
  }
}

module.exports = Subscribe;