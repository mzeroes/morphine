import React from "react";
import { FlatList, View } from "react-native";
import { baseStyles } from "../../constants/Styles";
import ProfileView from "../../components/ProfileCard";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    users: []
  }

  constructor(props) {
    super(props);
    this.usersAsync();
  }

  // eslint-disable-next-line no-unused-vars
  keyExtractor = (item, index) => item.id;

  usersAsync = async () => {
    const response = await fetch("https://randomuser.me/api/?page=3&results=10&seed=abcd");
    const { results } = await response.json();

    const processUsers = user => ({
      id: user.phone,
      image: user.picture.medium,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
    });

    const users = results.map(processUsers);
    this.setState({
      users
    });
  }

  render() {
    const { users } = this.state;
    return (
      <View style={baseStyles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <ProfileView profileDetails={item} />}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
