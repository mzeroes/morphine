import React from "react";
import ProfileView from '../../components/ProfileViewCard'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  //TODO: 2 views ProfileView and Profile Edit view
  render() {
    return <ProfileView />;
  }
}
