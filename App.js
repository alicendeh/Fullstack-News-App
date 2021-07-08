import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SearchBar from './src/components/SearchBar';
import BlogCard from './src/components/BlogCard';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <SearchBar />
        <BlogCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    margin: 10,
  },
  main: {
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});
