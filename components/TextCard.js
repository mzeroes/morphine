import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from '../constants';

const TextCard = props => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: Colors.grey,
    margin: 8,
    marginTop: 0
  },
  text: {
    margin: 12,
    alignSelf: 'center',
    fontSize: 18,
    color: Colors.primary
  }
});
export default TextCard;
