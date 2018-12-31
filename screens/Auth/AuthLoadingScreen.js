import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text
} from "react-native";

import { colors } from "../../config";
import { loginUser } from "../../config/api";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  state = { validToken: false };

  validateTokenAsync = async (token) => {
    const res = await loginUser(token);
    console.log(res);
    if (res.ok) {
      this.setState({ validToken: true });
      console.log("validated token");
    }
    console.log("end of validateTokenAsync");
  };

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log(`UserToken : ${userToken}`);
    if (userToken) await this.validateTokenAsync(userToken).catch(err => console.warn(err));
    this.props.navigation.navigate(this.state.validToken ? "App" : "Auth");
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
