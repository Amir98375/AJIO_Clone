
import React from 'react'

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const ImageCard = ({imageUrl,Amount,title}) => {
  return (
    <Card style={{width:'100%'}}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}

    <Card.Cover source={{ uri:imageUrl}} style={{height:150,margin:10}} />
    <Card.Content>
   
     <Text variant="bodyMedium"> {title}</Text>
      <Text variant="bodyMedium">Price:{Amount} </Text>

    </Card.Content>

  </Card>
  
  )
}

export default ImageCard

const styles = StyleSheet.create({})