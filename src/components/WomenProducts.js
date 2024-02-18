import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image,StyleSheet  } from 'react-native';

const WomenProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();
  const clothingCategories = [
    { name: 'Kurti', image:'https://as1.ftcdn.net/v2/jpg/06/53/63/36/1000_F_653633682_fNPuMuSys5ums8acrnfVwSGnNrJ2qnlW.jpg',},
    { name: 'T-shirts', image:'https://as1.ftcdn.net/v2/jpg/03/35/80/92/1000_F_335809295_sJuqHRvU2wuGXljDLtDkgJMD0jUSdS3L.jpg' },
    { name: 'Jeans', image:'https://as2.ftcdn.net/v2/jpg/02/01/09/83/1000_F_201098396_PxvDXpjiQ0VOgrSoRJqpfT6I20j8eZgu.jpg' },
    { name: 'Saree', image:'https://as1.ftcdn.net/v2/jpg/06/30/88/20/1000_F_630882034_QJMV5MKINirlxqqniCOF3Bjkk2DOBisq.jpg' },
  ];

  const beautyCategories = [
    { name: 'Lipstick', image: 'https://as1.ftcdn.net/v2/jpg/00/58/38/12/1000_F_58381204_IRRMEENV2CoIO0zR5MXdrSplEW0li7Cq.jpg' },
    { name: 'Makeup Kits', image: 'https://as1.ftcdn.net/v2/jpg/00/48/73/60/1000_F_48736039_LG58RcvTAYl06DD7g6ZGEWKikxSH5HEG.jpg' },
    { name: 'Face Wash', image: 'https://as1.ftcdn.net/v2/jpg/03/84/71/84/1000_F_384718497_pgBNO6krO9qXOl3fFPntqRWvnCgDjwuP.jpg' },
    { name: 'Body Lotion', image: 'https://as2.ftcdn.net/v2/jpg/06/70/02/63/1000_F_670026361_Os3oDvibWWlIEvd7ZfMIYOAY5WWGUVgA.jpg' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigation.navigate('products', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Clothing Categories</Text>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        {clothingCategories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryClick(category)} style={styles.card}>
            <Image source={{ uri: category.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.heading}>Beauty Products Categories</Text>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        {beautyCategories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryClick(category)} style={styles.card}>
            <Image source={{ uri: category.image }} style={styles.image} resizeMode="cover" />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* {selectedCategory && (
        <View style={styles.selectedCategoryContainer}>
          <Text style={styles.selectedCategoryName}>{selectedCategory.name}</Text>
          <Image source={{ uri: selectedCategory.image }} style={styles.selectedCategoryImage} resizeMode="cover" />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scroll: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    marginRight: 10,
    width: 120,
    height: 180,
    borderWidth: 2,
    borderColor: '#ff00ff',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
  categoryName: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  selectedCategoryContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedCategoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedCategoryImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});



export default WomenProducts;
