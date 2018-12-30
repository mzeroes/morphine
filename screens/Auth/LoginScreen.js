import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage
} from "react-native";
import { AuthSession } from "expo";

import { MonoText } from "../../components/StyledText";
import { baseStyles } from "../../constants/Styles";
import { login, loginUser } from "../../config/api";
import { config } from "../../config"
const styles = baseStyles;

const FB_APP_ID = config.FB_APP_ID;

export default class LoginScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    userName: "",
    userId: "",
    errorMessage: null,
    validatedUser: false,
    result: null
  };
  LoginAsync = async token => {
    if (this.state.validatedUser) {
      const test = await AsyncStorage.setItem("userToken", token);
      this.props.navigation.navigate("App");
    }
    console.log("handling login : " + this.state.errorMessage + token);
  };

 
  LoginAuthSessionAsync = async () => {
    console.log("handleLogin");

    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`
    });
    this.setState({ result });
    console.log(JSON.stringify(result));
    const res = await loginUser(result.params.access_token);
    this.setState({
      userName: res._bodyInit.name,
      userId: res._bodyInit.id,
      validatedUser: true
    });
    await this.LoginAsync(result.params.access_token);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.baseContainer}>
            <Text style={styles.headingText}>Welcome</Text>
            <MonoText style={styles.highlightText}>
              Sign in to continue
            </MonoText>
            {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
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
              }}>
              or
            </Text>
            <TouchableOpacity
              onPress={this.LoginAuthSessionAsync}
              style={{
                color: "#fff",
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
          <Text style={styles.linkText}>
            {JSON.stringify(this.state.result)}
          </Text>
        ) : null}
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUp")}
            style={styles.helpLink}
          >
            <Text style={styles.linkText}>New user? Signup instead</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleSignupPress = () => {
    // navigate to signup form
  };
}
