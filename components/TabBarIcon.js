import React from 'react';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if ( props.lib === 'FontAwesome' ) {
    return (
        <FontAwesome
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    )
  }
  if ( props.lib === 'MaterialCommunityIcons' ) {
    return (
        <MaterialCommunityIcons
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    )
  }
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
