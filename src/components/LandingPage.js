import { ScrollView, Text, View, StyleSheet,TouchableOpacity, StatusBar } from "react-native";
import React, { Component, useState  } from "react";



const LandingPage = ({ setSelectedCategory, setProducts }) => {
  const [loginAuth,setLoginAuth]=useState(true)

 
  return (

      <View style={styles.container}>
        <StatusBar backgroundColor="#007bff" barStyle="light-content" />
        <TouchableOpacity
         onPress={() => { 
          // setSelectedCategory('men');
         
        }}
          style={styles.menuItem}
         
        >
          <Text style={styles.menuText}>

            Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => { 
            // setSelectedCategory('women');
           
          }}
        >
          <Text style={styles.menuText}>Womens
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          // onPress={() => navigation.navigate("Screen3")}
        >
          <Text style={styles.menuText}>{loginAuth?'Login':'Logout'}</Text>
        </TouchableOpacity>
        {/* {selectedCategory === 'men' && <MenProducts products={products} />}
      {selectedCategory === 'women' && <WomenProducts products={products} />} */}
      </View>
  
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 5,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.75,
  shadowRadius: 3.84,
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
    // height:40,
//  verticalAlign:'middle',
    borderRadius:3,
    // backgroundColor:'black'
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust text color
  },
});

export default LandingPage;
