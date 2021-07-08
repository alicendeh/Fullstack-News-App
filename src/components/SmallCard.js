//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BlogCard from './BlogCard';

const { width } = Dimensions.get('window');

// create a component
const SmallCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <BlogCard otherStyle={styles.cont} imgStyle={styles.img} item={item} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  cont: {
    width: width / 2,
    height: 200,
  },
  img: {
    height: 100,
  },
});

//make this component available to the app
export default SmallCard;
