import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import store from 'app/redux/store';
import DetailsList from '../../components/DetailsListCard';
import UserProfileCard from '../../components/UserProfileCard';

import { profileDetails, details } from '../../constants/appDetails';
import { Colors } from '../../constants';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    user: null
  }

  constructor() {
    super();
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { user } = await store.getState();
    this.setState({ user });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: Colors.background }}>
        <UserProfileCard user={this.state.user} />
        <DetailsList profileDetails={profileDetails} details={details} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SettingsScreen);
