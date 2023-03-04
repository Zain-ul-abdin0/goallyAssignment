import { Icon } from '@rneui/themed/dist/Icon'
import React, { Component } from 'react'
import { Image, View, TextInput, StyleSheet } from 'react-native'

function SearchBar({getSearchText}) {

  function setText(queryText){
    getSearchText(queryText);
  }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
        onChangeText={queryText => setText(queryText)}
        >Serach</TextInput>
        <View style={styles.icon}>
          <Icon name="search" size={32} color="white" />
        </View>
      </View>
      <Image source={require('../../assets/icons/sort.jpg')} style={styles.iconStyle} resizeMode='contain' />
    </View>
  )
}


export default SearchBar

const styles = StyleSheet.create({
  container: {height:'10%',width:'100%', flexDirection: 'row', justifyContent: 'center',alignItems:'center' },
  input: {
    width: '80%',
    height: '65%',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '1%',
  },
  icon: { height: '100%', width: '14%', borderColor: '#49B0AB', borderWidth: 1, backgroundColor: '#49B0AB', justifyContent: 'center' },
  iconStyle: {
    height: '65%', width: '14%', marginLeft: '1%'
  }
})
