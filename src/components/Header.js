import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import { Icon } from '@rneui/themed';

const screenWidth = Math.round(Dimensions.get('window').width);

function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#182545"
      />
      <View style={styles.textView}>
        <View style={styles.homeIconWrap}>
          <Icon name="home" size={32} color="#49B0AB" />
        </View>
        <Text style={styles.text}> Routines </Text>
        <View style={styles.settingsIconWrap}>
          <Icon name="settings" size={32} color="#D95182" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: screenWidth,
    backgroundColor: '#182545'
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  homeIconWrap: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    marginLeft: '3%'
  },
  settingsIconWrap: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    marginRight: '3%'
  }
})