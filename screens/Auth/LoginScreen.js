import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { MonoText } from "../../components/StyledText";
import { baseStyles } from "../../constants/Styles";
import { colors } from "../../config";
import { storeTokenInStore } from "../../redux/store";
import { validateFBTokenAsync, webSessionLoginFBAsync } from "../../config/api";


export default class LoginScreen extends React.Component {
  static navigationOptions = { header: null };

  state = {
    errorMessage: null,
    validatedUser: false,
    result: null
  };

  LoginAsync = async (token) => {
    if (this.state.validatedUser) {
      await storeTokenInStore(token);
      console.log(`[INFO**] LoginAsync validatedUser: ${token}`);
      this.props.navigation.navigate("App");
    }
    console.log(`[ERRORS**] LoginAsync : ${this.state.errorMessage}`);
  };

  LoginAuthSessionAsync = async () => {
    const result = await webSessionLoginFBAsync();
    const response = await validateFBTokenAsync(result.params.access_token);
    if (response) {
      this.setState({ validatedUser: true });
    }
    this.setState({ result });
    await this.LoginAsync(result.params.access_token);
  };

  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView
          style={baseStyles.container}
          contentContainerStyle={baseStyles.contentContainer}
        >
          <View style={baseStyles.imageContainer}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={baseStyles.welcomeImage}
            />
          </View>

          <View style={baseStyles.baseContainer}>
            <Text style={baseStyles.headingText}>Welcome</Text>
            <MonoText style={baseStyles.highlightText}>
              Sign in to continue
            </MonoText>
            {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )}
            <TextInput
              style={baseStyles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={baseStyles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 20
              }}
            >
              or
            </Text>
            <TouchableOpacity
              onPress={this.LoginAuthSessionAsync}
              style={{
                color: colors.white,
                alignItems: "center",
                backgroundColor: "#3C485B",
                borderRadius: 10,
                padding: 10,
                width: "100%",
              }}
            >
              <Text style={{ color: "#fff" }}>Login using facebook</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {this.state.result ? (
          <Text style={baseStyles.linkText}>
            {JSON.stringify(this.state.result)}
          </Text>
        ) : null}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={baseStyles.linkLoginSignup}
        >
          <Text style={baseStyles.linkText}>New user? Signup instead</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
