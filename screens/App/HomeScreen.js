import React from "react";
import { Image, ScrollView, Text, View, StatusBar } from "react-native";
import { baseStyles } from "../../constants/Styles";
import { userDetails } from "../../config/api";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.userdetails();
  }
  state = {
    name: "Anon",
    id: "3136"
  };

  userdetails = async () => {
    const res = await userDetails();
    var o = JSON.parse(res);
    console.log(o);
    this.setState({ name: o.name, id: o.id });
  };
  render() {
    return (
      <View style={baseStyles.container}>
        <StatusBar barStyle="dark-content" />
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
            <Text style={baseStyles.headingText}>Welcome {this.state.name}</Text>
            <Text>Your Id is {this.state.id}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
