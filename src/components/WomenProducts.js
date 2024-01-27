// WomenProducts.js
import React from 'react';
import { View, Text } from 'react-native';

const WomenProducts = ({ products }) => {
  return (
    <View>
      <Text>Womens Products:</Text>
      {products.map(product => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </View>
  );
};

export default WomenProducts;
