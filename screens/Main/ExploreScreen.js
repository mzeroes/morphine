import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';
import styles from 'styles';
import ProfileView from 'components/ProfileCard';
import { usersAsync } from 'api/user';
import { Colors } from 'app/constants';
import TabBarIcon from 'components/icons/TabBarIcon';
import NavigationService from 'utils/NavigationService';


export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    users: []
  }

  constructor(props) {
    super(props);
    this.bootstrap();
  }

  keyExtractor = (item, index) => item.id;

  bootstrap = async () => {
    const users = await usersAsync();
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (

      <View style={{
        flex: 1,
        backgroundColor: Colors.background
      }}
      >
        <View style={styles.topBarStyle}>
          <TouchableOpacity onPress={() => {
            NavigationService.toggleDrawer();
          }}
          >
            <TabBarIcon
              name="ios-menu"
              size={28}
            />
          </TouchableOpacity>
          <RkTextInput
            placeholder="Search..."
          />
        </View>
        <FlatList
          data={users}
          renderItem={({ item }) => <ProfileView profileDetails={item} />}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
