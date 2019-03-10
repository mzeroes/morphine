import React from 'react';
import { View, Platform } from 'react-native';

import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';

import { Theme } from 'theme';
import Layout from 'theme/constants/Layout';


import LogoutCard from 'components/cards/LogoutCard';

import TabBarIcon from 'components/icons/TabBarIcon';
import MainTabNavigator, { SettingsStack } from './MainTabNavigator';

const HomeTabNavigator = MainTabNavigator;
HomeTabNavigator.navigationOptions = {
  drawerLabel: 'Home',

  activeBackgroundColor: 'rgba(0,0,0,0)',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
};

const SettingsTabNavigator = SettingsStack;
SettingsTabNavigator.navigationOptions = {
  drawerLabel: 'Settings',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  )
};

const DrawerContent = props => (
  <View style={{ flex: 1, backgroundColor: Theme.sidebar }}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'always' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <LogoutCard />
  </View>
);

const MainDrawNavigator = createDrawerNavigator(
  {
    Home: HomeTabNavigator,
    Settings: SettingsTabNavigator
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: Layout.window.width - (Platform.OS === 'android' ? 56 : 64),
    contentOptions: {
      activeTintColor: Theme.activeTintColor,
      inactiveTintColor: Theme.inactiveTintColor,
      activeBackgroundColor: 'rgba(0,0,0,0)',
      inactiveBackgroundColor: 'rgba(0,0,0,0)',
      style: {
        marginVertical: 0
      },
      labelStyle: {
        fontWeight: 'bold',
        fontFamily: 'space-mono',
        backgroundColor: 'transparent'
      }
    }
  }
);

export default MainDrawNavigator;
