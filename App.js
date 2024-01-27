// import * as React from 'react';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/components/LandingPage';
import Home from './src/components/Home';
import Signup from './src/components/Signup';
import Login from './src/components/Login';
import MainPage from './src/components/MainPage';
import MenProducts from './src/components/MenProducts';
import WomenProducts from './src/components/WomenProducts';


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
 
    <LandingPage 
      setSelectedCategory={setSelectedCategory}
      setProducts={setProducts} 
    />
      {renderProducts()}
     <MainPage/>
    </SafeAreaView>
    //  {/* <LandingPage/> */}
    //   {/* <StatusBar style="auto" /> */}
    // {/* </View> */}
  );
}

export default App;