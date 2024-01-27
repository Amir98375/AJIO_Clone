import { ScrollView, Text, View, StyleSheet,TouchableOpacity, StatusBar } from "react-native";
import React, { Component, useState  } from "react";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";



const LandingPage = ({ setSelectedCategory, setProducts }) => {
  const [loginAuth,setLoginAuth]=useState(true)

  const fetchProducts = (category) => {
    if (category === 'men') {
      setProducts([
        { id: 1, name: 'Mens Product 1' },
        { id: 2, name: 'Mens Product 2' },
      ]);
    } else if (category === 'women') {
      setProducts([
        { id: 1, name: 'Womens Product 1' },
        { id: 2, name: 'Womens Product 2' },
      ]);
    }
    setSelectedCategory(category);
  };
  return (

      <View style={styles.container}>
        <StatusBar backgroundColor="#007bff" barStyle="light-content" />
        <TouchableOpacity
         onPress={() => { 
          // setSelectedCategory('men');
          fetchProducts('men');
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
            fetchProducts('women');
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
