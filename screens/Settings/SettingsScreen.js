import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Theme } from 'theme';
import { TopBar } from 'components';
import NavigationService from 'utils/NavigationService';
import LogoutCard from 'components/cards/LogoutCard';
import { SettingsList } from 'components/cards/SettingsList';

const list = [
  {
    id: '1',
    name: 'Hello, World!',
    subtitle: 'Welcome to the Earth!',
    icon: 'space-bar'
  }
];

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  // eslint-disable-next-line no-unused-vars
  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => <SettingsList item={item} />;

  render() {
    return (
      <ScrollView style={{ backgroundColor: Theme.background }}>
        <TopBar
          onPress={() => {
            NavigationService.toggleDrawer();
          }}
          icon="ios-menu"
        >
          <Text
            style={{
              color: Theme.dark
            }}
          >
            Settings
          </Text>
        </TopBar>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
        <LogoutCard />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SettingsScreen);
