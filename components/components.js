import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import style from './css/components';


export default class Components extends Component {
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
        <Text style={style.title}>Components</Text>
        <View style={style.hairline} />
        <Text style={style.subtitle}></Text>
        </ScrollView>
        <Text style={style.footer}> created by Danielle Howard</Text>
      </View>
    );
  }
}