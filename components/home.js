import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import Button from 'react-native-button';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      val: false
    };
  }
  highlights() {
    this.setState({
      val: true
    });
  };
  render() {
    return (
      <View >
        <Text style={style.title}>React Native</Text>
        <Text style={style.subtitle}>A Guide to Get Your First Application Up</Text>
        <Button onPress={() => this.handlePress()}>Get Me Started</Button>
        <Button onPress={() => this.highlights()}>Highlights</Button>
        {this.state.val ? <Text style={style.gen}>Will redirect to new Component</Text> : <Text></Text>}
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 50,
    marginBottom: 10,
  },
  subtitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'top'
  },
  gen: {
    textAlign: 'center',
  }
});
