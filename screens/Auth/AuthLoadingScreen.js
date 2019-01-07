import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text
} from 'react-native';

import { getUser } from 'auth/authFirebase';
import { Colors } from 'app/constants';
import store from 'app/redux/store';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  state = { validatedUser: false };

  bootstrapAsync = async () => {
    getUser()
      .then(() => {
        this.setState({ validatedUser: true });
      }).then(() => {
        this.props.navigation
          .navigate(this.state.validatedUser ? 'App' : 'Auth');
      }).catch((err) => {
        console.log(`${err}`);
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: Colors.background
        }}
      >
        <StatusBar backgroundColor={Colors.statusbar} barStyle="dark-content" />
        <Text style={{ alignSelf: 'center', margin: 20 }}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
