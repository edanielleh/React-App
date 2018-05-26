import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Home from './components/home';

export default class App extends Component {

  render() {
    return (
      <View style = {style.container} >
        <Home />
      </View>
    ); 
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});