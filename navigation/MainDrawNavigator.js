import React from 'react';
import {
  View
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';

import MainTabNavigator,
{
  SettingsStack,
  ChatStack
} from './MainTabNavigator';

import TNCAndLogoutCard from '../components/TNCAndLogoutCard';

import { Colors } from '../constants';

const HomeTabNavigator = MainTabNavigator;

const SettingsTabNavigator = SettingsStack;

const ProfileChatScreen = ChatStack;


const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: Colors.grey }}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'always' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <TNCAndLogoutCard />
  </View>
);

const MainDrawNavigator = createDrawerNavigator({
  Home: HomeTabNavigator,
  Message: ProfileChatScreen,
  Settings: SettingsTabNavigator,
}, {
  contentComponent: CustomDrawerContentComponent
});

export default MainDrawNavigator;
