
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import ImageCard from './ImageCard';

const MainPage = () => {
  const [array,setArray]=useState([    {
    imageUrl:'https://picsum.photos/500',
    Amount:'$1200',
    title:'USPA jeans',
   
  },    {
    imageUrl:'https://picsum.photos/400',
    Amount:'$1100',
    title:'USPA jeans',
  },    {
    imageUrl:'https://picsum.photos/700',
    Amount:'$900',
    title:'USPA jeans',
  },    {
    imageUrl:'https://picsum.photos/800',
    Amount:'$1000',
    title:'USPA jeans',
  },
  {
    imageUrl:'https://picsum.photos/300',
    Amount:'$700',
    title:'USPA jeans',
  },  {
    imageUrl:'https://picsum.photos/900',
    Amount:'$1300',
    title:'USPA jeans',
  }

])
  const [images,setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
     ]);


  return (
    <SafeAreaView >
      <View  >
        <SliderBox 
      
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="pink"
          inactiveDotColor="#90A4AE"
          autoplay={10}
          circleLoop={true}
          dotStyle={{
            width: 30,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "grey"
          }}
          />
      </View>


    <FlatList
    data={array}
    numColumns={2} // Number of columns in the grid
    contentContainerStyle={styles.container2}
    renderItem={({ item }) => (
      <View style={styles.cardContainer2}>
        <ImageCard imageUrl={item.imageUrl} 
        Amount={item.Amount} title={item.title}/>
      </View>
    )}
    keyExtractor={(item, index) => index.toString()}
  />     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  container2: {
    justifyContent: 'space-between', // Distribute items along the main axis
    paddingHorizontal: 8,
  },
  cardContainer2: {
    flex: 1,
    margin: 8,
    aspectRatio: 0.75, // Adjust the aspect ratio to control the height of each card
  },
});


export default MainPage;
