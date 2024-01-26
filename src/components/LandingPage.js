import { ScrollView, Text, View, StyleSheet,TouchableOpacity, StatusBar } from "react-native";
import React, { Component, useState  } from "react";


const LandingPage = () => {
  const [loginAuth,setLoginAuth]=useState(true)
  return (

      <View style={styles.container}>
        <StatusBar backgroundColor="#007bff" barStyle="light-content" />
        <TouchableOpacity
          style={styles.menuItem}
          // onPress={() => navigation.navigate("Screen1")}
        >
          <Text style={styles.menuText}>

            Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          // onPress={() => navigation.navigate("Screen2")}
        >
          <Text style={styles.menuText}>Womens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          // onPress={() => navigation.navigate("Screen3")}
        >
          <Text style={styles.menuText}>{loginAuth?'Login':'Logout'}</Text>
        </TouchableOpacity>
      </View>
  
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'skyblue', // You can adjust the background color here
    height: 60, // Adjust the height of the menu bar
    elevation: 3, // Adds shadow to the menu bar
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust text color
  },
});

export default LandingPage;
