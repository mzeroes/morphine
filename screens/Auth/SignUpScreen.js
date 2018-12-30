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
  Button,
  AsyncStorage
} from "react-native";

import { MonoText } from "../../components/StyledText";
import { baseStyles } from "../../constants/Styles";
const styles = baseStyles;

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = { name: "", email: "", password: "", errorMessage: null };
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log("handleLogin");
  };

  SignupAsync = async () => {
    // get a token from backend
    await AsyncStorage.setItem("userToken", "TOKEN3136");
    // this.props.navigation.navigate("App");
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
              Sign up to continue
            </MonoText>
            {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Name"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
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
            <TouchableOpacity
              onPress={this.SignupAsync}
              style={styles.touchableButton}
            >
              <Text style={styles.linkText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
            style={styles.helpLink}
          >
            <Text style={styles.linkText}>Already signedup? Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleSignupPress = () => {
    // navigate to signup form
  };
}
