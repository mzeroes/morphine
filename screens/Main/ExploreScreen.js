import React from 'react';

import { View } from 'react-native';

import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import DataList from 'components/cards/DataList';

import { usersAsync } from 'api/user';
import { TopSearchBar } from 'components';

class ExploreScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    isLoadingComplete: false,
    data: '',
    isFetching: false
  };

  onRefresh() {
    this.setState({ isFetching: true });
    this.loadResourcesAsync();
  }

  loadResourcesAsync = async () => {
    const data = await usersAsync();
    this.setState({ data });
    this.setState({ isFetching: false });
  };

  handleLoadingError = (error) => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      const { data } = this.state;
      const { navigation } = this.props;
      return (
        <View style={{ padding: 0, margin: 0, flex: 1 }}>
          <TopSearchBar data={data} navigation={navigation} />
          <DataList
            data={data}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  darkMode: state.darkMode
});

export default connect(mapStateToProps)(ExploreScreen);
