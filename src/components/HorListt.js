//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';
import BlogCard from './BlogCard';
import data from './FakeData';

const { width } = Dimensions.get('window');

// create a component
const MyComponent = ({ title }) => {
  const sift = data.filter((item) => item.category === 'political');

  return (
    <View style={styles.container}>
      <Title size={20}> {title} </Title>
      <FlatList
        data={sift}
        horizontal
        showsHorizontalScrollIndicator={false}
        // keyExtractor={({ item }) => item.id}
        renderItem={({ item }) => (
          <BlogCard
            otherStyle={styles.cont}
            imgStyle={styles.img}
            item={item}
          />
        )}
      />
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
export default MyComponent;
