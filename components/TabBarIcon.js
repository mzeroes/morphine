import React from "react";
import { Icon } from "expo";

import { colors } from "../config";

const TabBarIcon = props => (
  <Icon.Ionicons
    name={props.name}
    size={28}
    style={{ marginBottom: -4 }}
    color={props.focused ? colors.tabIconSelected : colors.tabIconDefault}
  />
);

export default TabBarIcon;
