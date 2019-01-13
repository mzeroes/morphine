import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from 'theme';
import TabBarIcon from 'components/icons/TabBarIcon';
import { TopBar } from './TopBar';

class TopSearchBar extends React.Component {
  render() {
    const { navigation, data } = this.props;
    return (
      <TopBar icon="ios-menu" iconsize={14}>
        <TouchableOpacity
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingLeft: 8,
            alignItems: 'center'
          }}
          onPress={() => {
            navigation.navigate('Search', { data });
          }}
        >
          <TabBarIcon name="ios-search" size={17} />
          <Text
            style={[styles.monoText, { textAlign: 'left', paddingLeft: 8 }]}
          >
            Search
          </Text>
        </TouchableOpacity>
      </TopBar>
    );
  }
}

export default TopSearchBar;
