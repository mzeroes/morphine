import React from "react";
import {
  SectionList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import DetailsCard from './DetailsCard'
import TNCAndLogoutCard from './TNCAndLogoutCard'

import { profileDetails, details } from "../constants/teamDetails";
import { colors } from "../config";

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const SectionContent = props => {
  return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

export default class ProfileView extends React.Component {
  // let props contains profileDetails
  render() {
    const sections = [
      { data: [{ value: profileDetails.name }], title: "Name" },
      { data: [{ value: profileDetails.email }], title: "Email" },
      { data: [{ value: profileDetails.pass }], title: "Password" },
      { data: [{ value: profileDetails.address }], title: "Address" }
    ];

    return (
      <ScrollView style={styles.container} >
        <SectionList
          style={styles.container}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={DetailsCard(details)}
          sections={sections}
        />
        <TNCAndLogoutCard />
      </ScrollView>
    );
  }


  renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };
  renderItem = ({ item }) => {
    return (
      <SectionContent>
        <Text style={styles.sectionContentText}>{item.value}</Text>
      </SectionContent>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignContent: "center",
    padding: 6
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 45,
    paddingBottom: 45,
    backgroundColor: colors.grey,
    marginBottom: 45
  },
  titleSubContainer: {
    flex: 1,
    alignContent: "center",
  },
  titleIconContainer: {
    alignSelf: "center",
    marginRight: 25,
    paddingTop: 2
  },
  sectionHeaderContainer: {
    backgroundColor: colors.grey,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey
  },
  titleHeader: {
    margin: 20,
    alignSelf: "center",
    fontSize: 28,
    color: colors.primary
  },
  sectionHeaderText: {
    fontSize: 14
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: "#4d4d4d"
  },
  profileDetailsText: {
    fontSize: 14,
    marginTop: 6,
    color: colors.dark
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  sectionContentText: {
    color: colors.secondary,
    fontSize: 14
  },
  nameText: {
    fontWeight: "600",
    fontSize: 18
  }
});
