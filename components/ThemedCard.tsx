import { StyleSheet, Text, useColorScheme, View, ViewProps } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

const ThemedCard = ({style, ...rest}:ViewProps) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];
  return (
    <View style={[{backgroundColor: theme.uiBackground },styles.card, style]} {...rest}>
      <Text>ThemedCard</Text>
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 2,
    padding: 20,
    elevation: 2,
  },
})