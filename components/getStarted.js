import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Button from 'react-native-button';
 

export default class getStarted extends Component {
    constructor() {
      super();
      this.state = {
        val: false
      };
    }
    render() {
      return (
        <View style = {style.container}>
        <ScrollView>
          <Text style={style.title}>Getting Started</Text>
          <View style={style.hairline} />
          <Text>To get a project up and running, open your terminal and run the following commands</Text>
          <FlatList
          data={[
            {key: 'npm install -g create-react-native-app'},
            {key: 'create-react-native-app sample-app'},
            {key: 'cd sample-app'},
            {key: 'yarn start or npm start'},
          ]}
          renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
        />
          <Text>On the terminal should be a qrcode and instructions. Install Viro Media from the app store and follow the instructions to either scan the code using the app or use a link instead for IOS. The view should be identical to below</Text>
          <Image 
          source={require('../images/getStarted1/phonevieworiginal.png')}
          />
          <Text>Open sample-app/app.js in your code editor.</Text>
          <Image 
          source={require('../images/getStarted1/appjs.png')}
          />
          <Text>Add your own text to the component</Text>
          <Image 
          source={require('../images/getStarted1/editappjs.png')}
          />
          <Text>When you save the file Viro media will update on your phone and display the text</Text>
          <Image 
          source={require('../images/getStarted1/phoneviewedit.png')}
          />
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
      paddingBottom: 10
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
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });
  