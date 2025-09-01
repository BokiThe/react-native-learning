import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router' 
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={styles.link}>
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Home Page</Text>
      </Link>
    </View>
  )
}

export default Contact

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