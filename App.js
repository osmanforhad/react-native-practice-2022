import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomStyle from "./asset/style/customStyle";

class App extends Component {
  render() {
    return (
      <View>
        <Text style={CustomStyle.red}>osman forhad, Full Stack Developer</Text>
      </View>
    );
  }
}

export default App;
