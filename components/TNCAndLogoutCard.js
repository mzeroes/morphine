import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { APP_URL } from '../config';
import { Colors } from '../constants';
import { handleUrl, onPressLogoutAsync } from '../utils';

const TNCAndLogoutCard = () => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.ppContainer}
      onPress={() => handleUrl(`${APP_URL}/privacy`)}
    >
      <Text>Privacy policy</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.tncContainer}
      onPress={() => handleUrl(`${APP_URL}/tnc`)}
    >
      <Text>Licences & Terms of Service</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.logOutButton}
      onPress={onPressLogoutAsync}
    >
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.grey,
    padding: 24,
    margin: 8,
    marginBottom: 40
  },
  ppContainer: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  tncContainer: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  logOutButton: {
    alignItems: 'center',
    backgroundColor: Colors.red,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  }
});
export default TNCAndLogoutCard;
