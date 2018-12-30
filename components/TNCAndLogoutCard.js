import React from 'react';
import {
  StyleSheet, View, Text,
  TouchableOpacity
} from 'react-native';
import { colors } from '../config'
import { handleUrl, onPressLogout } from "../utils";

export default TNCAndLogoutCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          borderRadius: 10,
          padding: 10,
          marginTop: 20
        }}
        onPress={() => handleUrl(config.url + "/privacy")}
      >
        <Text>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          borderRadius: 10,
          padding: 10,
          marginTop: 20
        }}
        onPress={() => handleUrl(config.url + "/tnc")}
      >
        <Text>Licence, Terms and conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          borderRadius: 10,
          padding: 10,
          marginTop: 20
        }}
        onPress={onPressLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
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
  detailsText: {
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
