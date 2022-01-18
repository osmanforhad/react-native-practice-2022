import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
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
      <View style={{backgroundColor:"white", flex:100}}>
      <View style={{backgroundColor:"red", flex:30}}></View>
      <View style={{backgroundColor:"blue", flex:60}}></View>
      <View style={{backgroundColor:"green", flex:10}}></View>
    </View>
    );
  }
}

export default App;
