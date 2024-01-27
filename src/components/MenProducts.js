// MenProducts.js
import React from 'react';
import { View, Text } from 'react-native';

const MenProducts = ({ products }) => {
  return (
    <View>
      <Text>Mens Products:</Text>
      {products.map(product => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </View>
  );
};

export default MenProducts;
