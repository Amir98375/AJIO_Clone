import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
<<<<<<< HEAD
// import { NavigationContainer } from '@react-navigation/native';
=======
import LandingPage from './src/components/LandingPage';

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> b0d1a92ead7efe61d64f25ba244157c280c2d4eb
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LandingPage from './src/components/LandingPage';
import Home from './src/components/Home';
import Signup from './src/components/Signup';
import Login from './src/components/Login';
import MainPage from './src/components/MainPage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaView >
 
    <LandingPage/>
     <MainPage/>
    </SafeAreaView>
    //  {/* <LandingPage/> */}
    //   {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
  );
}

export default App;