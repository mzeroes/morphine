import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text
} from "react-native";

import { colors } from "../../config";
import { loginUserWithFBToken, validateFBTokenAsync } from "../../config/api";
import { getStoredToken } from "../../redux/store";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  state = { validToken: false };

  validateTokenAsync = async (token) => {
    const response = await validateFBTokenAsync(token);
    if (response) {
      this.setState({ validToken: true });
    }
  };

  bootstrapAsync = async () => {
    const userToken = await getStoredToken();
    if (userToken) {
      await this.validateTokenAsync(userToken)
        .catch(err => console.warn(err));
    }
    this.props.navigation
      .navigate(this.state.validToken ? "App" : "Auth");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: colors.background
        }}
      >
        <StatusBar backgroundColor={colors.statusbar} barStyle="dark-content" />
        <Text style={{ alignSelf: "center", margin: 20 }}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
