import React from 'react';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from 'theme';
import TabBarIcon from 'components/icons/TabBarIcon';
import { Header } from 'react-native-elements';

const MenuIcon = props => (
  <TouchableOpacity disabled={!props.onPress} onPress={() => props.onPress()}>
    <TabBarIcon name={props.icon || 'ios-menu'} size={props.iconsize || 20} />
  </TouchableOpacity>
);

export const TopBar = props => (
  <View
    style={{
      backgroundColor: Theme.statusbar
    }}
  >
    <Header
      // rightComponent={}
      placement="left"
      leftContainerStyle={{
        paddingLeft: 10
      }}
      // rightContainerStyle={{
      // }}
      // centerContainerStyle={{
      // }}
      containerStyle={{
        paddingTop: 0,
        margin: 4,
        marginTop: 0,
        height: 46,
        backgroundColor: Theme.background,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Theme.background
      }}
    >
      {props.icon && <MenuIcon onPress={props.onPress} icon={props.icon} />}
      {props.children}
    </Header>
  </View>
);
