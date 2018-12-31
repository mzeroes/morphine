import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

import AuthLoadingScreen from "../screens/Auth/AuthLoadingScreen";

const AuthStack = createStackNavigator({
  SignIn: LoginScreen,
  SignUp: SignUpScreen
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
