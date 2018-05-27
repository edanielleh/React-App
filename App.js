import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Home from './components/home';
import getStarted from './components/getStarted';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene style = {style.container} key="root">
          <Scene key="home" component={Home} initial={true} />
          <Scene key="getStarted" component={getStarted}  />
        </Scene>
      </Router>
    ); 
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});