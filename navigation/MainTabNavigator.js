import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import { styles, Theme } from 'theme';
import TabBarIcon from '../components/icons/TabBarIcon';
import HomeScreen from '../screens/Main/HomeScreen';
import ExploreScreen from '../screens/Main/ExploreScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import PostsScreen from '../screens/Main/PostsScreen';
import SearchScreen from '../screens/Main/SearchScreen';

export const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-pin${focused ? '' : '-outline'}` : 'md-pin'
      }
    />
  )
};

export const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
  Search: SearchScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  )
};

export const PostsStack = createStackNavigator({
  Posts: PostsScreen
});

PostsStack.navigationOptions = {
  tabBarLabel: 'Post',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-albums' : 'ios-albums'}
    />
  )
};

export const ChatStack = createStackNavigator({
  Inbox: SearchScreen
});

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
    />
  )
};

export const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Account',

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  )
};

export default createBottomTabNavigator(
  {
    ExploreStack,
    HomeStack,
    PostsStack
  },
  {
    tabBarOptions: {
      activeTintColor: Theme.activeTintColor,
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: styles.bottomTab
      }
    }
  }
);
