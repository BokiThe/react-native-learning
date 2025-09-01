import { StyleSheet, Text, TextProps, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

const ThemedText = ({style, title=false, ...rest}:TextProps & {
    title?: boolean
}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];
    const textColor = title ? theme.title : theme.text;

    return (
        <Text style={[{ color: textColor }, style]} {...rest} />
    )
}



export default ThemedText

