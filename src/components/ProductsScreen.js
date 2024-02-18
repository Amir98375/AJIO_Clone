import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ProductsScreen = ({ route }) => {
  const { category } = route.params;

  const sampleProducts = [
    { id: 1, name: 'Sample Product 1', image: 'https://as1.ftcdn.net/v2/jpg/06/53/63/36/1000_F_653633682_fNPuMuSys5ums8acrnfVwSGnNrJ2qnlW.jpg', description: 'Description' },
    { id: 2, name: 'Sample Product 2', image: 'https://as1.ftcdn.net/v2/jpg/06/53/63/36/1000_F_653633682_fNPuMuSys5ums8acrnfVwSGnNrJ2qnlW.jpg', description: 'Description' },

  ];

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products for {category.name}</Text>
      <FlatList
        data={sampleProducts}
        numColumns={2}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.productList}
        contentContainerStyle={styles.productListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productListContent: {
    paddingBottom: 20, 
  },
  productItem: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FF1493',
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
  },
});

export default ProductsScreen;
