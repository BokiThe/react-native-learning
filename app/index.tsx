import { StyleSheet, Text,  useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';


import BooproLogo from '../assets/img/booproLogo.png'
import BooproLogoDark from '../assets/img/booproLogoLight.png'
import ThemedView from '../components/ThemedView';
import { Colors } from '../constants/Colors';
import ThemedImage from '../components/ThemedImage';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

export default function Home() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  return (
    <ThemedView style={styles.container}> 
      <ThemedImage
        sourceDark={BooproLogoDark}
        sourceLight={BooproLogo}
        style={styles.img}
        resizeMode="contain"
      />
      <Spacer height={20}/>
      <ThemedText style={styles.title} title>TITLE</ThemedText>
    <Spacer height={10}/>
      <ThemedText >
        U medjuvremenu se uci react native
      </ThemedText>
    <Spacer />

      <Link href="/about" style={[ styles.link, { borderBottomColor: theme.text }]}>
        <ThemedText>
          Go to About Page
        </ThemedText>
      </Link>
      <Spacer height={20}/>
      <Link href="/contact" style={[styles.link, { borderBottomColor: theme.text }]}>
        <ThemedText >Go to Contact Page</ThemedText>
      </Link>

    <Spacer height={20}/>
      <Link href="/login" style={[styles.link, { borderBottomColor: theme.text }]}>
        <ThemedText>Go to Login Page</ThemedText>
      </Link>
    <Spacer height={20}/>

      <Link href="/register" style={[styles.link, { borderBottomColor: theme.text }]}>
        <ThemedText>Go to Register Page</ThemedText>
      </Link>

    </ThemedView>
  );
}

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
  img: {
    width: 150,
    padding: 10,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.5)',
  },
  link: {
    borderBottomWidth: 1,

  }
});