import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomStyle from "./asset/style/customStyle";
import PageOne from './pages/PageOne';

class App extends Component {
  render() {
    return (
      <View>
        <PageOne />
        <Text style={CustomStyle.red}>osman forhad, Full Stack Developer</Text>
      </View>
    );
  }
}

export default App;
