import React, { Component, useState } from 'react'
import { View, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import Cards from './src/components/Cards';
import List from './src/components/List';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const screenWidth = Math.round(Dimensions.get('window').width);

function App() {
  let [searchText, setSearchText] = useState('');;
  let [isAsc, setAsc] = useState(true);;

  function getSearchText(text) {
    setSearchText(text);
  }
  function getAsc(value) {
    setAsc(value)
  }
  return (

    <View style={styles.start}>
      <Header />
         <View style={styles.container}>
          <Cards cardName="Morning Routine" />
          <Cards cardName="Night Routine" />
        </View>
        <SearchBar getSearchText={getSearchText} getAsc={getAsc} />
        <List searchText={searchText} isAsc={isAsc} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '18%',
    width: screenWidth,
    backgroundColor: 'white',
    marginTop: '5%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  start: {
    backgroundColor: 'white', flex: 1
  }
})