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

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: {
        url: 'https://api.stripe.com/v1/tokens?',
        secretKey: 'pk_test_YY64uLJXjWb0ilpklxOoBWhX'
      },
      cardDetails: {
        "card[number]": '4242424242424242',
        "card[exp_month]": '01',
        "card[exp_year]": '2020',
        "card[cvc]": '123'
      }
    };
    this._onPressOneTime = this._onPressOneTime.bind(this);
    this._renderOneTimeButton = this._renderOneTimeButton.bind(this);

    this._onPressSubscription = this._onPressSubscription.bind(this);
    this._renderSubscriptionButton = this._renderSubscriptionButton.bind(this);

    this._handleCreateCardToken = this._handleCreateCardToken.bind(this);

  }

  _onPressOneTime() {

    this._handleCreateCardToken();
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

  _handleCreateCardToken() {
    let formBody = [];

    console.log('props, ',this.props);

    //Or JSON.stringify lol. Originally had different design in mind. Whatever.
    for (let property in this.state.cardDetails) {
      let key = encodeURIComponent(property);
      let val = encodeURIComponent(this.state.cardDetails[property]);
      formBody.push(key + "=" + val);
    }
    formBody = formBody.join("&");

    return (
      fetch(this.state.stripe.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.state.stripe.secretKey
        },
        body: formBody
      }).then(function(res) {
          let stripeApiResponse = res;
          
          //console.log('Response: ', stripeApiResponse.json())
          return res.json();
          //return Promise.resolve(stripeApiResponse.json());
          //debugger;
      }).then(function(data) {
        console.log('DATA ', data);
        return (
          fetch('https://dogfacts-558f8.firebaseio.com/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': ''
            },
              body: JSON.stringify({
                token: data.id,
              })
          }).then(function(res) {
            return res.json();
          }).then(function(confirmationResponse){
            console.log('confirmed response from firebase', confirmationResponse);
            debugger;
          })
        );
      })
    );
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