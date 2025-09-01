import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link } from 'expo-router' 
import React from 'react'

import { Colors } from '../constants/Colors'
    
const About = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>About Page</Text>

      <Link href="/" style={[styles.link, { borderBottomColor: theme.text}]}>
        <Text style={{ color: theme.text, marginTop: 20 }}>Go to Home Page</Text>
      </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  link: {
    marginVertical: 20,
    borderBottomWidth: 1,
  }
})