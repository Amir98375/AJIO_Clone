// MenProducts.js
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const MenProducts = () => {
  const arr=[1,2,3,4,5,6,7,8,9]
  return (
<ScrollView>

{arr.map((el)=>{
  return(
    <View style={styles.container}>
      <View style={styles.containerChild}>
      <Image source={{uri:'https://picsum.photos/500'}}
        style={styles.imageCon}/>
      </View>
      <View style={styles.containerChild}>
        <Image source={{uri:'https://picsum.photos/300'}}
        style={styles.imageCon}/>
        
      </View>
      <View style={styles.containerChild}>
      <Image source={{uri:'https://picsum.photos/400'}}
        style={styles.imageCon}/>
        
      </View>
    </View>
  )
})}
</ScrollView>
  );
};

export default MenProducts;

const styles = StyleSheet.create({
  imageCon:{
   height:'100%',
   width:'100%',
   borderRadius:'50%'
  },
  container: {
     display:'flex',
    justifyContent: "space-around",
    flexDirection:'row',
    backgroundColor:'white',
   paddingVertical:10,

    height: '100px',
// alignContent:'center',
    width: '100%',
 
    
  },
  containerChild: {
    height:100,
    width: "30%",
    // backgroundColor:'whitesmoke',
  //    alignItems:'center',

  //  alignSelf:'center',
  elevation: 2, // Add elevation for box shadow
  // backgroundColor: "green",
   borderRadius:50,
    // borderWidth:2,
    // borderColor: "1px solid black",
  },
});
