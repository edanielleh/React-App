import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import style from './css/home';


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
        <Button style={style.buttons} onPress={Actions.getStarted}>Get Me Started</Button>
        <Button style={style.buttons} onPress={() => this.highlights()}>Browse All Topics</Button>
        {this.state.val ? <Text style={style.gen}>Will redirect to new Component</Text> : null}
        </ScrollView>
        <Text style={style.footer}> created by Danielle Howard</Text>
      </View>
    );
  }
}
