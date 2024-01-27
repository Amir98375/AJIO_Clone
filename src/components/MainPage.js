
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const MainPage = () => {
  const [images,setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
     ]);

  return (
    <SafeAreaView >
      <View >
        <SliderBox 
      
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainPage;
