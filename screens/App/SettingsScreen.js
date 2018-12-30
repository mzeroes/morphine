import React from "react";
import DetailsList from "../../components/DetailsListCard";
import { profileDetails, details } from "../../constants/teamDetails";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <DetailsList profileDetails={profileDetails} details={details} />
    );
  }
}
