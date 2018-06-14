import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Linking, Image} from 'react-native';
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
        <Text style={style.instructions}>Components allow us to split the UI into reusable, simple pieces. Typically the navbar and footer are commonly reused components.</Text>
        <Text>To set up a component on our sample-app, install react-native-router-flux. Then require the packages Router and Scene from it in App.js</Text>

        <Icon name = "info" size = {50} onPress={() => this.info1()}/>
        { this.state.info1 ? 
        <View>
          <Text>You can use various other libraries other than react-native-router-flux. React Router
          is another polular choice. </Text> 
        </View>
        : null }
        <Text  style={style.instructions}>Inside of the return statment, relpace the View tag and it's contents with a Router tag. Inside the Router tage add a Scene tag, requiring the style and adding a key equal to root. It should read </Text>
        <Image style = {style.images}
          source={require('../images/components/appjs1st.png')}
          />
          <Text style={style.instructions}>Now we can add a component to render. You can create your component in the main directory or in a sub directory for better organization. In your component, add the following imports 
          </Text>
          <Text  style={style.instructions}>import React, {"{ Component }"} from 'react';</Text>
          <Text  style={style.instructions}>import {"{ Text, View }"} from 'react-native';</Text>
          <Text  style={style.instructions}>Then create a class called Home and have it extend Component. Set Home as the default export. Inside the Component creaete a render function. Then we return one "master" element to render. Create a {"<View>"}  tag and inside that create a {"<Text>"} tag with your own message.
          </Text>
        </ScrollView>
        <Text style={style.footer}> created by Danielle Howard</Text>
      </View>
    );
  }
}