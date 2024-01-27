// import * as React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View,SafeAreaView, ScrollView  } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/components/LandingPage';


// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
=======
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
>>>>>>> 459c4f30479b60bf09cabecb1f323d7a2f7ea5ca
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/components/LandingPage';
import Home from './src/components/Home';
import Signup from './src/components/Signup';
import Login from './src/components/Login';
import MainPage from './src/components/MainPage';
<<<<<<< HEAD
import ImageCard from './src/components/ImageCard';
=======
import MenProducts from './src/components/MenProducts';
import WomenProducts from './src/components/WomenProducts';
>>>>>>> 459c4f30479b60bf09cabecb1f323d7a2f7ea5ca


const Stack = createNativeStackNavigator();

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const renderProducts = () => {
    if (selectedCategory === 'men') {
      return <MenProducts products={products} />;
    } else if (selectedCategory === 'women') {
      return <WomenProducts products={products} />;
    }
    return null;
  };
  return (
    // <View style={styles.container}>
    <SafeAreaView >
 
<<<<<<< HEAD
<ScrollView>
<LandingPage/>
=======
    <LandingPage 
      setSelectedCategory={setSelectedCategory}
      setProducts={setProducts} 
    />
      {renderProducts()}
>>>>>>> 459c4f30479b60bf09cabecb1f323d7a2f7ea5ca
     <MainPage/>

</ScrollView>
    </SafeAreaView>
    //  {/* <LandingPage/> */}
    //   {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
  );
}

export default App;