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
  getStarted() {
    this.setState({
      val: true
    });
  };
  render() {
    return (
      <View style = {style.container}>
        <Text style={style.title}>React Native</Text>
        <View style={style.hairline} />
        <Text style={style.subtitle}>A Guide to Get Your First Application Up</Text>
        <Button style={style.buttons} onPress={() => this.getStarted()}>Get Me Started</Button>
        <Button style={style.buttons} onPress={() => this.highlights()}>Browse All Topics</Button>
        {this.state.val ? <Text style={style.gen}>Will redirect to new Component</Text> : null}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#A9ACAE',
    flex: 1
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'top',
    paddingBottom: 10,
    paddingTop: 50
  },
  subtitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'top',
    paddingBottom: 100,
    paddingTop: 10
  },
  gen: {
    textAlign: 'center',
  },
  buttons: {
     color: 'black',
     fontSize: 30,
     marginBottom: 20,
     backgroundColor: 'red'
  },
  hairline: {
    backgroundColor: 'black',
    height: 3,
    width: 400
  },
});
