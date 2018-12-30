import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { baseStyles } from "../../constants/Styles";
import { userDetails } from "../../config/api";
import UserProfileCard from "../../components/UserProfileCard";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.userdetails();
  }

  state = {
    user: {
      id: "",
      name: "",
      image: "",
      email: ""
    }
  };

  userdetails = async () => {
    const results = await userDetails();
    // eslint-disable-next-line no-console
    console.log(results);
    this.setState({
      user: {
        id: results.id, name: results.name
      }
    });
  };

  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView
          style={{
            margin: 8, padding: 12
          }}
          contentContainerStyle={baseStyles.contentContainer}
        >
          <UserProfileCard user={this.state.user} />
        </ScrollView>
      </View>
    );
  }
}
