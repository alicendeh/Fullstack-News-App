//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const SearBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="  Search here.." style={styles.input} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
});

//make this component available to the app
export default SearBar;
