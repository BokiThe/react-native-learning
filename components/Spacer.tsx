import { FlexStyle,  StyleSheet,  View, ViewProps } from 'react-native'
import React from 'react'

const Spacer = ({width = "100%", height = 40, ...rest}:ViewProps & {
    width?: FlexStyle['width'],
    height?: FlexStyle['height'],
}) => {
  return (
    <View style={{width, height}} {...rest}/>

  )
}

export default Spacer