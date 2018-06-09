import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Linking} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import style from './css/components';
import { Icon } from 'react-native-elements';


export default class Components extends Component {
  constructor() {
    super();
    this.state = {
      info1: false
    };
  }
  info1() {
    this.setState({
      info1: !this.state.info1
    });
  };
  render() {
    return (
      <View style = {style.container}>
      <ScrollView>
        <Text style={style.title}>Components</Text>
        <View style={style.hairline} />
        <Text>Components allow us to split the UI into reusable, simple pieces. Typically the navbar and footer are commonly reused components.</Text>
        <Text>To set up a component on our sample-app, install react-native-router-flux. Then require the packages Router and Scene from it in App.js</Text>

        <Icon name = "info" size = {50} onPress={() => this.info1()}/>
        { this.state.info1 ? 
        <View>
          <Text>You can use various other libraries other than react-native-router-flux. React Router
          is another polular choice. </Text> 
        </View>
        : null }
        </ScrollView>
        <Text style={style.footer}> created by Danielle Howard</Text>
      </View>
    );
  }
}