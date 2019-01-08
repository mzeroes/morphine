import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { RkButton, RkText } from 'react-native-ui-kitten';
import { Icon } from 'expo';

import { Colors } from '../../constants';
import styles from '../../styles';

import { loginFireUsingFaceBook } from '../../auth/authUsingFacebook';
import { loginFireUsingGoogle } from '../../auth/authUsingGoogle';

class SignInProvidersScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
  };

  render() {
    return (
      <View style={styles.formikContainer}>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <RkButton
            onPress={() => {
              loginFireUsingGoogle().then((res) => {
                this.props.navigation.navigate('App');
              }).catch((err) => { console.log(err); });
            }}
            style={[styles.touchableButton, localstyles.googleButton]}
          >
            <Icon.Ionicons
              style={[localstyles.icon, { marginHorizontal: 12, fontSize: 25 }]}
              name="logo-google"
            />
            <RkText style={{ color: Colors.white }}>Continue with Google</RkText>
          </RkButton>
          <RkButton
            onPress={() => {
              loginFireUsingFaceBook().then((res) => {
                this.props.navigation.navigate('App');
              }).catch((err) => { console.log(err); });
            }}
            style={[styles.touchableButton, localstyles.facebookButton]}
          >
            <Icon.Ionicons
              name="logo-facebook"
              style={[localstyles.icon, { marginHorizontal: 12, fontSize: 25 }]}
            />
            <RkText style={{ color: Colors.white }}>Continue with Facebook</RkText>
          </RkButton>
          <RkButton
            onPress={() => this.props.navigation.navigate('Login')}
            style={[styles.touchableButton, localstyles.emailButton]}
          >
            <Icon.Ionicons
              style={[localstyles.icon, { marginHorizontal: 12, fontSize: 25 }]}
              name="ios-mail"
            />
            <RkText style={{ color: Colors.white }}>Continue with Email</RkText>
          </RkButton>
          <RkButton
            onPress={() => { this.props.navigation.navigate('SignUp'); }}
            style={[styles.touchableButton, {
              width: '100%',
              alignItems: 'center',
              backgroundColor: Colors.red,
              borderRadius: 4,
              padding: 14,
              marginTop: 10,
              marginBottom: 10,
            }]}
          >
            Sign up with email
          </RkButton>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
          <Text>
            By signing up you indicate that you have read and agree to ours
            {' '}
            <Text style={{ color: Colors.tintColor }}>Terms and conditions</Text>
            and
            {' '}
            <Text style={{ color: Colors.tintColor }}>Privacy policy</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const localstyles = StyleSheet.create({
  emailButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    paddingLeft: 0,
    borderRadius: 4,
    padding: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  googleButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingLeft: 0,
    borderRadius: 4,
    padding: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  facebookButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    borderRadius: 4,
    padding: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  iconButton: {
    width: 50,
    marginHorizontal: 8,
    paddingHorizontal: 0,
  },
  circleIconButton: {
    width: 44,
    paddingHorizontal: 0,
    marginHorizontal: 9,
  },
  textSpace: {
    marginVertical: 3,
  },
  icon: {
    alignItems: 'flex-start',
    color: 'white',
  },
  primaryIcon: {
    color: Colors.primary,
  },
  successIcon: {
    color: Colors.overlay,
  },
  iconRound: {
    marginRight: 9,
    fontSize: 29,
  },
});

export default SignInProvidersScreen;
