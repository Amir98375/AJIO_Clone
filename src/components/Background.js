import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React, { Children } from 'react'

const Background = ({children}) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require("../../assets/shop1.jpg")} style={{height: "100%", overflow:'hidden'}} />
      <View style ={{position:"absolute"}}>
        {children}
      </View>
    </View>
  )
}

export default Background

