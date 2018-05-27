import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,} from 'react-native';
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
      <ScrollView>
        <Text style={style.title}>React Native</Text>
        <View style={style.hairline} />
        <Text style={style.subtitle}>A Guide to Get Your First Application Up</Text>
        <Button style={style.buttons} onPress={() => this.getStarted()}>Get Me Started</Button>
        <Button style={style.buttons} onPress={() => this.highlights()}>Browse All Topics</Button>
        {this.state.val ? <Text style={style.gen}>Will redirect to new Component</Text> : null}
        </ScrollView>
        <Text style={style.footer}> created by Danielle Howard</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#D2EDBF',
    flex: 1
  },
  title: {
    backgroundColor: '#9BD770',
    color: '#1B3409',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'top',
    paddingBottom: 10, 
  },
  subtitle: {
    color: '#1B3409',
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
     color: '#1B3409',
     fontSize: 30,
     marginBottom: 20,
     backgroundColor: '#9BD770'
  },
  hairline: {
    backgroundColor: '#1B3409',
    height: 3,
    width: 400
  },
  footer: {
    textAlign: 'right',
    backgroundColor: '#1B3409',
    fontSize: 18
  }
});
