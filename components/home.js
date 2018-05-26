import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import Button from 'react-native-button';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      val: "test"
    };
  }
  handlePress() {
    this.setState({
      val: "different"
    });
  };
  render() {
    return (
      <View >
        <Text>{ this.state.val }</Text>
        <Button onPress={() => this.handlePress()}>Press Me!</Button>
      </View>
    );
  }
}

