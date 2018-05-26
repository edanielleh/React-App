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
        <Text style={styles.title}>React and React Native</Text>
        <Text style={styles.subtitle}> A Guide to Get Your First Application Up</Text>
        <Text style={styles.title}>{ this.state.val }</Text>
        <Button onPress={() => this.handlePress()}>Press Me!</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 50
  },
  subtitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'top'
  },
  red: {
    color: 'red',
  },
});
