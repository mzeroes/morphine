import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from '../constants';

const DetailsCard = details => (
  <View style={styles.titleContainer}>
    <View style={styles.titleIconContainer}>
      <Image source={details.image} />
    </View>
    <View style={styles.titleSubContainer}>
      <Text style={styles.titleHeader} numberOfLines={1}>
        {details.title}
      </Text>
      <Text style={styles.descriptionText}>
        {details.description}
      </Text>
      <Text style={styles.detailsText}>
        {details.details}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: Colors.grey,
    padding: 12,
    marginBottom: 40
  },
  titleSubContainer: {
    flex: 1,
    alignContent: 'center',
  },
  titleIconContainer: {
    alignSelf: 'center',
    marginRight: 25,
    paddingTop: 2
  },
  titleHeader: {
    margin: 20,
    alignSelf: 'center',
    fontSize: 28,
    color: Colors.primary
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: Colors.secondary
  },
  detailsText: {
    fontSize: 14,
    marginTop: 6,
    color: Colors.dark
  },
});

export default DetailsCard;
