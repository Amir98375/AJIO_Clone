// MenProducts.js
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const MenProducts = () => {
  const arr=[1,2,3,4,5,6,7,8,9]
  return (
<ScrollView>

{arr.map((el,index)=>{
  return(
    <View style={styles.container}>
      <View style={styles.containerChild}>
      <Image key={index} source={{uri:'https://picsum.photos/500'}}
        style={styles.imageCon}/>
        <Text style={styles.title}>Title Title  2</Text>
      </View>
      <View style={styles.containerChild}>
        <Image key={index} source={{uri:'https://picsum.photos/300'}}
        style={styles.imageCon}/>
        <Text style={styles.title}>Title Title  2</Text>
      </View>
      <View style={styles.containerChild}>
      <Image key={index} source={{uri:'https://picsum.photos/400'}}
        style={styles.imageCon}/>
      <Text style={styles.title}>Title Title  2</Text>
        
      </View>
      
    </View>
  )
})}
</ScrollView>
  );
};

export default MenProducts;

const styles = StyleSheet.create({
  imageCon: {
    height: '75%',
    width: "90%",
    borderRadius: 10 // half of 150
  },
  title:{
    textAlign: 'center',
    marginTop: 5,
    // color: 'white'
  },
  container: {
    backgroundColor:'whitesmoke',
    display: 'flex',
    justifyContent: "space-around",
    flexDirection: 'row',
    // backgroundColor: 'grey',
    paddingVertical: 10,
    height: 150,
    width: '100%',
  },
  containerChild: {
    height: '100%',
    width: "30%",
    borderRadius:15,
    elevation:2,
    backgroundColor:'lightgrey',
    alignItems: 'center', // Align content horizontally center
    justifyContent: 'center' // Align content vertically center
  },
});
