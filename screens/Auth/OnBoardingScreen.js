import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Theme, styles } from 'theme';
import Onboarding from 'react-native-onboarding-swiper';

import OnBoardingAnimation from 'components/animation/OnBoardingAnimation';
import { storeItemAsync } from 'api/asyncStore';

const animationfile1 = require('assets/animations/floating_cloud.json');
const animationfile2 = require('assets/animations/waves.json');

const OnboardDoneAsync = async (props, navigateTo) => {
  storeItemAsync('isOnboardDone', 'true');
  props.navigation.navigate(navigateTo);
};

const OnboardingScreen = props => (
  <View
    style={[
      styles.container,
      { paddingBottom: 30, backgroundColor: Theme.white }
    ]}
  >
    <Onboarding
      bottomBarHighlight={false}
      showSkip={false}
      // showNext={false}
      showDone={false}
      onDone={() => {
        OnboardDoneAsync(props, 'Providers');
      }}
      pages={[
        {
          backgroundColor: Theme.white,
          image: <OnBoardingAnimation animationfile={animationfile1} />,
          title: 'This is a very awesome App',
          subtitle: ''
        },
        {
          backgroundColor: Theme.white,
          image: <OnBoardingAnimation animationfile={animationfile2} />,
          title: 'Use it as you like it',
          subtitle: ''
        },
        {
          backgroundColor: Theme.white,
          image: <OnBoardingAnimation animationfile={animationfile1} />,
          title: 'Why not try it?',
          subtitle: ''
        }
      ]}
    />
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => {
          OnboardDoneAsync(props, 'Providers');
        }}
        style={{
          alignItems: 'center',
          backgroundColor: Theme.overlay,
          borderRadius: 4,
          padding: 10,
          marginTop: 10,
          width: '70%'
        }}
      >
        <Text
          style={{ color: Theme.surface, fontSize: 18, fontWeight: 'bold' }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
OnboardingScreen.navigationOptions = {
  header: null
};
export default OnboardingScreen;
