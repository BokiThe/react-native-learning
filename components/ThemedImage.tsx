import {  Image, ImageProps, useColorScheme } from 'react-native'
import React from 'react'



const ThemedImage = ({ sourceDark, sourceLight,source, ...rest }: ImageProps & {
    sourceDark?: ImageProps['source'],
    sourceLight?: ImageProps['source'],
}) => {
    const colorScheme = useColorScheme();
    const darkAndLightSource = colorScheme === 'dark' ? sourceDark : sourceLight
  return (<Image source={source ? source : darkAndLightSource} {...rest} />)
}

export default ThemedImage