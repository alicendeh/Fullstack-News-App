//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogCard from './BlogCard';

// create a component
const Blog2 = ({ item }) => {
  return <BlogCard item={item} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Blog2;
