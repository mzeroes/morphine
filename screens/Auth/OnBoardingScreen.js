import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { Colors } from '../../constants';
import OnBoardingAnimation from '../../components/OnBoardingAnimation';
import styles from '../../styles';

const animationfile1 = require('../../assets/animations/floating_cloud.json');
const animationfile2 = require('../../assets/animations/waves.json');

const OnboardingScreen = props => (
  <View style={styles.container}>
    <Onboarding
      bottomBarHighlight={false}
      showSkip={false}
      // showNext={false}
      showDone={false}
      onDone={async () => {
        await AsyncStorage.setItem('isOnboardDone', 'true');
        props.navigation.navigate('Providers');
      }}
      pages={[
        {
          backgroundColor: Colors.background,
          image: <OnBoardingAnimation
            animationfile={animationfile1}
          />,
          title: 'Page 1',
          subtitle: '',
        },
        {
          backgroundColor: Colors.background,
          image: <OnBoardingAnimation
            animationfile={animationfile2}
          />,
          title: 'Page 2',
          subtitle: '',
        },
        {
          backgroundColor: Colors.background,
          image: <OnBoardingAnimation
            animationfile={animationfile1}
          />,
          title: 'Page 3',
          subtitle: '',
        },
      ]}
    />
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: Colors.primary, fontSize: 16, fontWeight: 'bold' }}>Ready to get started ? </Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Providers');
        }}
        style={{
          alignItems: 'center',
          backgroundColor: Colors.primary,
          borderRadius: 4,
          padding: 14,
          marginTop: 10,
          width: '70%'
        }}
      >
        <Text style={{ color: Colors.textLight, fontSize: 18, fontWeight: 'bold' }}>GET STARTED</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Text style={{ fontSize: 16 }}>Have an account? </Text>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          style={{
          }}
        >
          <Text style={[styles.linkText, { fontSize: 16, fontWeight: 'bold' }]}>Log In</Text>
        </TouchableOpacity>
      </View>

    </View>
  </View>
);
OnboardingScreen.navigationOptions = {
  header: null
};
export default OnboardingScreen;
