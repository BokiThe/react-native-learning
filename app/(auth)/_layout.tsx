import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import 'expo-router/entry';

import { Colors } from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  return (
    <>
      <StatusBar style='auto' />
        <Stack  screenOptions={{
          headerShown: false,
          animation: 'none'
        }}>

        

     

      </Stack>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})