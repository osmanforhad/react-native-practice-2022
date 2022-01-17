import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CustomStyle from "./asset/style/customStyle";
import ComponentOne from './components/ComponentOne';
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

  changeInfo = () => {
    this.setState({name:"Forhad", city:"Sylhet", Profession:"Software Enginearing"})
  }

  render() {
    return (
      <View>
        <View style={{flexDirection:"column", alignItems:"center", height:200, width:"100%", backgroundColor:'red'}}>
        <Text>Example of React Native Core View Component:</Text>
        <View style={{flexDirection:"column", alignItems:"center", height:150, width:"80%", backgroundColor:'green'}}>
        <Text>The Below Property Comming From State Object:</Text>
        <View style={{flexDirection:"column", alignItems:"center", height:100, width:"75%", backgroundColor:'white'}}>
        <Text>Name: {this.state.name}</Text>
        <Text>Present Address: {this.state.city}</Text>
        <Text>Profession: {this.state.Profession}</Text>
        </View>
        </View>
        </View>
        <Button onPress={this.changeInfo} title="Clcik Here"></Button>

        <Text>The below Content is Comming from Page and Multiple Components:</Text>
        <PageOne />

        <Text>The below content is exmple of external styling:</Text>
        <Text style={CustomStyle.red}>osman forhad, Full Stack Developer</Text>

        <Text>PROPOS Element Display Here as ComponentOne files value:</Text>
        <ComponentOne name="osman" city="Dhaka" age="28" />
      </View>
    );
  }
}

export default App;
