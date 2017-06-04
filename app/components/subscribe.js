import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
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
    super(props);
    this._onPressOneTime = this._onPressOneTime.bind(this);
    this._renderOneTimeButton = this._renderOneTimeButton.bind(this);

    this._onPressSubscription = this._onPressSubscription.bind(this);
    this._renderSubscriptionButton = this._renderSubscriptionButton.bind(this);
  }

  _onPressOneTime() {

  }

  _renderOneTimeButton() {
    const oneTimePrompt = 'Send one fact';
    return (
      <TouchableOpacity 
        onPress={this._onPressOneTime}
      >
        <Text>
          {oneTimePrompt}
        </Text>
      </TouchableOpacity>
    )
  }

  _onPressSubscription() {

  }

  _renderSubscriptionButton() {
    const subscriptionPrompt = 'Subscribe for multiple facts';
    return (
      <TouchableOpacity 
        onPress={this._onPressOneTime}
      >
        <Text>
          {subscriptionPrompt}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const renderOneTime = this._renderOneTimeButton();
    const renderSubscription = this._renderSubscriptionButton();
    return (
      <View style={styles.container}>
        {renderOneTime}
        {renderSubscription}
      </View>
    )
  }
}

module.exports = Subscribe;