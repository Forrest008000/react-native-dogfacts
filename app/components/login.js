import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161419'
  },
  prompt: {
    color: '#cf0000',
    fontSize: 25
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this._renderPrompt = this._renderPrompt.bind(this);
  }

  _renderPrompt() {
    let prompt = 'Hello World';
    return (
      <Text>
        {prompt}
      </Text>
    )
  }
  
  render() {
    const renderPrompt = this._renderPrompt();
    return (
      <View>
        {renderPrompt}
      </View>
    )
  }
}

module.exports = Login;