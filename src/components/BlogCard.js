//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardTile from './Title';
import Subtitle from './Subtitle';

// create a component
const BlogCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require('../assets/alice.jpeg')} style={styles.image} />
      </View>
      <View style={styles.text}>
        <CardTile>
          XML Document TypesThree main types of XML documents:Data-centric
          XMLMany small data itemsHighly structuredOften used for data
          exchangepurposesTransfer data from one system to anotherAlso used to
          c
        </CardTile>
        <Subtitle>
          XML Document TypesThree main types of XML documents:Data-centric
          XMLMany small data itemsHighly structuredOften used for data
          exchangepurposesTransfer data from one system to anotherAlso used to
          c
        </Subtitle>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginVertical: 12,
  },
  text: {
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  imgView: {
    width: '100%',
    height: 200,
  },
});

//make this component available to the app
export default BlogCard;
