import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView  } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/components/LandingPage';


// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LandingPage from './src/components/LandingPage';
import Home from './src/components/Home';
import Signup from './src/components/Signup';
import Login from './src/components/Login';
import MainPage from './src/components/MainPage';
import ImageCard from './src/components/ImageCard';


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaView >
 
<ScrollView>
<LandingPage/>
     <MainPage/>

</ScrollView>
    </SafeAreaView>
    //  {/* <LandingPage/> */}
    //   {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
  );
}

export default App;