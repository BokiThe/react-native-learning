import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

interface ThemedButtonProps extends PressableProps {
    style?: StyleProp<ViewStyle>
   
}

const ThemedButton = ({ style, ...props}: ThemedButtonProps) => {

  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed, style]} {...props}/>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.5,
    }
})