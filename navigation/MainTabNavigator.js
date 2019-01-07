import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Main/HomeScreen';
import ExploreScreen from '../screens/Main/ExploreScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { Colors } from '../constants';
import ChatsScreen from '../screens/Main/ChatsScreen';
import PostsScreen from '../screens/Main/PostsScreen';

export const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pin${focused ? '' : '-outline'}`
          : 'md-pin'
      }
    />
  )
};

export const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
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
  Inbox: ChatsScreen
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
    HomeStack,
    PostsStack,
    ExploreStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: Colors.background
      }
    }
  }
);
