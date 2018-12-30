import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { colors } from '../config'

export default DetailsCard = ( details ) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <Image source={details.image} />
      </View>
      <View style={styles.titleSubContainer}>
        <Text style={styles.titleHeader} numberOfLines={1}>
          {details.title}
        </Text>
        <Text style={styles.descriptionText} >
          {details.description}
        </Text>
        <Text style={styles.detailsText}>
          {details.details}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.grey,
    padding: 8,
    marginTop: 40,
    marginBottom: 40
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
  titleHeader: {
    margin: 20,
    alignSelf: "center",
    fontSize: 28,
    color: colors.primary
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: colors.grey
  },
  detailsText: {
    fontSize: 14,
    marginTop: 6,
    color: colors.dark
  },
});
