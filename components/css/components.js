import React from 'react';
import {StyleSheet} from 'react-native';


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
      info: {

       
      },
      footer: {
        textAlign: 'right',
        backgroundColor: '#1B3409',
        fontSize: 18
      }
 });

 export default style;