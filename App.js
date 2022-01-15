import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomStyle from "./asset/style/customStyle";
import PageOne from './pages/PageOne';

class App extends Component {

  constructor(){
    super();

    this.state={
      name: "osman",
      age: "28",
      city: "Dhaka",
      HomeTown: "Feni",
      Profession: "Software Development",
      Position: "Full Stack Developer",
    }
  }

  render() {
    return (
      <View>
        <Text>The Below Property Comming From State Object:</Text>
        <Text>Name: {this.state.name}</Text>
        <Text>Present Address: {this.state.city}</Text>
        <Text>Profession: {this.state.Profession}</Text>

        <Text>The below Content is Comming from Page and Multiple Components:</Text>
        <PageOne />

        <Text>The below content is exmple of external styling:</Text>
        <Text style={CustomStyle.red}>osman forhad, Full Stack Developer</Text>
      </View>
    );
  }
}

export default App;
