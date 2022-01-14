import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends Component {
  render() {

  const myStyle =  StyleSheet.create({
      red:{
        color:'red',
        fontSize:24
      },
      green:{
        color:'green',
        fontSize:20
      }
    })

    return (
      <View>
        <Text style={myStyle.red}>osman forhad, Full Stack Developer</Text>
      </View>
    );
  }
}

export default App;
