// // import * as React from 'react';
// import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SafeAreaView, ScrollView  } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// import LandingPage from './src/components/LandingPage';


// // import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from './src/components/Home';
// import Signup from './src/components/Signup';
// import Login from './src/components/Login';
// import MainPage from './src/components/MainPage';
// import ImageCard from './src/components/ImageCard';


// const Stack = createNativeStackNavigator();

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [products, setProducts] = useState([]);

//   return (
//     // <View style={styles.container}>
// <SafeAreaView >
 
// <ScrollView>
// <LandingPage/>
// <MainPage/>

// </ScrollView>
//     </SafeAreaView>
//     //  {/* <LandingPage/> */}
//     //   {/* <StatusBar style="auto" /> */}
//     // {/* </View> */}
//   );
// }

// export default App;
import React from 'react';
import { StatusBar, Platform } from 'react-native'; // Correct import statement
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LandingPage from './src/components/LandingPage';
import MainPage from './src/components/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenProducts from './src/components/MenProducts';
import WomensPage from './src/Pages/WomensPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView> */}
    
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={MainPage} />
            <Stack.Screen name="mens" component={MenProducts} />
            <Stack.Screen name="womens" component={WomensPage} />
        
            {/* Add other screens here */}
          </Stack.Navigator>
        {/* </ScrollView> */}
      </SafeAreaView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
