import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Formik } from 'formik';
import { object as yupObject, string as yupString } from 'yup';

import { RkButton, RkTheme, RkText } from 'react-native-ui-kitten';
import { Icon } from 'expo';
import { loginFireWithEmail } from 'auth/authUsingEmail';
import LoginForm from '../../components/forms/LoginForm';
import { Colors } from '../../constants';
import styles from '../../styles';
import { loginFireUsingFaceBook } from '../../auth/authUsingFacebook';

class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
  };

  state = {
    errorMessage: null
  }

  render() {
    return (
      <View style={styles.formikContainer}>
        { this.state.errorMessage && (
        <View>
          <Text style={{ color: Colors.red }}>{this.state.errorMessage.message}</Text>
        </View>
        )
      }
        <Formik
          initialValues={{ email: 'john@doe.com', password: 'johndoe123' }}
          validationSchema={
            yupObject().shape({
              email: yupString()
                .email('Email is invalid')
                .required('Required'),
              password: yupString()
                .min(8, 'Minimum length should be greater than 8')
                .required('Required')
            })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            loginFireWithEmail(values.email, values.password)
              .then((res) => {
                if (res === 'success') {
                  this.props.navigation.navigate('App');
                }
              })
              .catch((err) => { this.setState({ errorMessage: err }); });
          }}
          render={form => LoginForm(form)}
        />
        <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <RkButton style={[styles.touchableButton, localstyles.googleButton]}>
            <Icon.Ionicons
              style={[localstyles.icon, { marginHorizontal: 12, fontSize: 25 }]}
              name="logo-google"
            />
            <RkText style={{ color: Colors.white }}>Continue with Google</RkText>
          </RkButton>
          <RkButton
            onPress={() => {
              loginFireUsingFaceBook().then((res) => {
                this.props.navigation.navigate('Main');
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
        </View>
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
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
          <Text style={{ color: Colors.tintColor }}>Privacy policy</Text>
          <Text style={{ color: Colors.tintColor }}>Terms and conditions</Text>
        </View>
      </View>
    );
  }
}

const localstyles = StyleSheet.create({
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
    color: RkTheme.current.colors.primary,
  },
  successIcon: {
    color: RkTheme.current.colors.success,
  },
  iconRound: {
    marginRight: 9,
    fontSize: 29,
  },
});

export default LogInScreen;
