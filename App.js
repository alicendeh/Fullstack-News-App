import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Blog2 from './src/components/BlogCard';
import SmallCard from './src/components/SmallCard';
import HorListt from './src/components/HorListt';
import myData from './src/components/FakeData';
import TechNews from './src/components/TechNews';

export default function App({ title, data }) {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Blog2
          item={{
            id: '8',
            title: 'This is the title no eight.',
            desc:
              'Desc is the short form of description and this format is the actual same as our real database.',
            thumbnail: 'http://lorempixel.com/400/200/',
            category: 'tech',
          }}
        />
        <HorListt title="Breaking News" />
        <TechNews title="Tech News" />
      </ScrollView>
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
