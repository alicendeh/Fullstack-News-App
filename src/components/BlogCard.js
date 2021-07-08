//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardTile from './Title';
import Subtitle from './Subtitle';

// create a component
const BlogCard = ({ otherStyle, imgStyle, item }) => {
  return (
    <View style={[styles.container, otherStyle]}>
      <Image
        source={{ uri: item.thumbnail }}
        style={[styles.image, imgStyle]}
      />
      <View style={styles.text}>
        <CardTile>{item.title}</CardTile>
        <Subtitle>{item.desc}</Subtitle>
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
    paddingHorizontal: 7,
  },
  text: {
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 7,
  },
  imgView: {},
});

//make this component available to the app
export default BlogCard;
