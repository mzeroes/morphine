import React from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";

import { baseStyles } from "../../constants/Styles";
import UserProfileCard from "../../components/UserProfileCard";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView>
          <UserProfileCard user={this.props.user} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HomeScreen);
