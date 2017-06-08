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
    backgroundColor: '#008000' //'#161419'
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsernameText: '',
      loginPasswordText: '',
      isAuthorized: false,
      inDevelopment: true
    };

    this._renderPrompt = this._renderPrompt.bind(this);
    this._renderUsernameInput = this._renderUsernameInput.bind(this);
    this._onUsernameChange = this._onUsernameChange.bind(this);
    this._renderPasswordInput = this._renderPasswordInput.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._renderLoginButton = this._renderLoginButton.bind(this);
    this._onLogin = this._onLogin.bind(this);
    //this._textInputHandler = this._textInputHanlder.bind(this);
  }

  componentWillMount() {
    if (this.state.inDevelopment) {
      this.setState({
        isAuthorized: true
      })
    }
  }

  /**
    _textInputHandler(text) {
  
    }
  */
  _renderPrompt() {
    let prompt = 'Welcome to DogFacts!';
    return (
      <Text style={styles.prompt}>
        {prompt}
      </Text>
    )
  }

  _renderUsernameInput() {
    return (
      <TextInput
        style={styles.loginInputs}
        onChangeText={this._onUsernameChange}
        value={this.state.loginUsernameText}
        placeholder={'Username'}
      />
    )
  }

  _onUsernameChange(loginUsernameText) {
    return (
      this.setState({ loginUsernameText })
    )
  }

  _renderPasswordInput() {
    return (
      <TextInput
        style={styles.loginInputs}
        onChangeText={this._onPasswordChange}
        value={this.state.loginPasswordText}
        placeholder={'Password'}
      />
    )
  }

  _onPasswordChange(loginPasswordText) {
    return (
      this.setState({ loginPasswordText })
    )
  }

  _renderLoginButton() {
    return (
      <Button
        onPress={this._onLogin}
        title='Login'
      />
    )
  }

  _onLogin() {
    this.props.navigator.push({
      id: 'Subscribe',
      data: {
        ...this.state
      }
    })
  }

  render() {
    //debugger;
    //console.log('state', ...this);
    const renderPrompt = this._renderPrompt();
    const renderUsernameInput = this._renderUsernameInput();
    const renderPasswordInput = this._renderPasswordInput();
    const renderLoginButton = this._renderLoginButton();
    return (
      <View style={styles.container}>
        {renderPrompt}
        {renderUsernameInput}
        {renderPasswordInput}
        {renderLoginButton}
      </View>
    )
  }
}

module.exports = Login;