import {  View, ViewProps, ViewStyle, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';



const ThemedView = ({ style, ...rest }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  return (
    <View {...rest} style={[{ backgroundColor: theme.background }, style]}/>
  );
}

export default ThemedView

