import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderView = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.sliderValueText}>Slider Value: {sliderValue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#007bff"
        maximumTrackTintColor="#000000"
        thumbTintColor="#007bff"
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'red'
  },
  sliderValueText: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
  },
});

export default SliderView;
