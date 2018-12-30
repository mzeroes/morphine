import React from "react";
import { ScrollView, StyleSheet, Image, Text, View } from "react-native";
import { WebBrowser } from "expo";
import Touchable from "react-native-platform-touchable";
import Colors from "../../config/Colors";

class LinksList extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>Resources</Text>
        <Touchable
          background={Touchable.Ripple("#ccc", false)}
          style={styles.option}
          onPress={()=>this.handlePressUrl("http://www.google.com")}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Join us on Slack</Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }

  handlePressUrl = (url) => {
    WebBrowser.openBrowserAsync(url);
  };
}

export default class LinksScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <LinksList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.background
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  }
});
