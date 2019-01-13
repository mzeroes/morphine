import React from 'react';

import { View, Text } from 'react-native';

import { styles } from 'theme';
import { Snackbar } from 'react-native-paper';

import { loginFireUsingFaceBook } from 'components/auth/authUsingFacebook';
import { loginFireUsingGoogle } from 'components/auth/authUsingGoogle';
import {
  GoogleSignInButton,
  FacebookSignInButton,
  LoginSignInButton
} from 'components/auth/LoginButtons';

import { TermsCard } from 'components/cards/LogoutCard';
import Login from './LogIn';

class SignInProvidersScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    info: null
  };

  componentWillReceiveProps() {
    const info = this.props.navigation.getParam('info', 'hello');
    this.setState({ info });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.formikContainer}>
        <Login navigation={navigation} />
        <Text style={styles.monoText}>or</Text>
        <View style={{ flex: 1 }}>
          <LoginSignInButton navigation={navigation} />
          <GoogleSignInButton
            login={loginFireUsingGoogle}
            navigation={navigation}
          />
          <FacebookSignInButton
            login={loginFireUsingFaceBook}
            navigation={navigation}
          />
          <TermsCard />
        </View>
        {this.state.info && (
          <Snackbar
            visible={this.state.info}
            onDismiss={() => {
              this.setState({ info: null });
            }}
            duration={10000}
            action={{
              label: 'Done',
              onPress: () => {
                this.setState({ info: null });
              }
            }}
          >
            {this.state.info}
          </Snackbar>
        )}
      </View>
    );
  }
}

export default SignInProvidersScreen;
