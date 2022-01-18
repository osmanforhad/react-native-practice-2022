import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, FlatList } from 'react-native';
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

  ListDataAsJSON = [
    {title:"Bangladesh", subtitle:"This is the Asian Nation Country"},
    {title:"India", subtitle:"This is the Asian Nation Country"},
    {title:"Pakisthan", subtitle:"This is the Asian Nation Country"},
    {title:"China", subtitle:"This is the Asian Nation Country"},
    {title:"JAPAN", subtitle:"This is the Asian Nation Country"},
    {title:"SPAIN", subtitle:"This is the Europian Nation Country"},
    {title:"Portugal", subtitle:"This is the Europian Nation Country"},
    {title:"France", subtitle:"This is the Europian Nation Country"},
    {title:"Poland", subtitle:"This is the Europian Nation Country"},
    {title:"Indonesia", subtitle:"This is the Asian Nation Country"},
  ];

  ChildView= ({title, subtitle}) => {
    return(
      <View style={{backgroundColor:"white", padding:10, margin:5}}>
        <Text style={{color:"black", fontSize: 18}}>{title}</Text>
        <Text style={{color:"black", fontSize: 16}}>{subtitle}</Text>
      </View>
    )
  }


  render() {
    return (
      <ScrollView>
        <View style={{height:165, width:"100%", backgroundColor:"black"}}>
        {/* <Image style={{flexDirection:"row", justifyContent:"center", height:165, width:"100%"}} source={{uri:'https://www.channelionline.com/wp-content/uploads/2019/07/channel-i-logo-1.png'}} /> */}
          <Image style={{flexDirection:"row", justifyContent:"center", height:165, width:"100%"}} source={require('./images/channel-i-logo.png')} />
        </View>

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
        <Button onPress={this.changeInfo} title="Clcik Here" color="teal"></Button>

        <View>
          <FlatList data={this.ListDataAsJSON} renderItem={({item}) => <this.ChildView title={item.title} subtitle={item.subtitle} /> } />
        </View>

        <View>
        <Text style={{color:"black"}}>The below Content is Comming from Page and Multiple Components:</Text>
        <PageOne />
        </View>

        <View>
        <Text style={{color:"black"}}>PROPOS Element Display Here as ComponentOne files value:</Text>
        <ComponentOne name="osman" city="Dhaka" age="28" />
        </View>

        <View>
        <Text style={{color:"black"}}>The below content is exmple of external styling:</Text>
          <ScrollView horizontal={true}>
          <View>
        <Text style={CustomStyle.red}>osman forhad, Full Stack Developer</Text>
        </View>
        <View>
        <Text style={CustomStyle.green}>&nbsp;Specialst of Backend Development</Text>
        </View>
          </ScrollView>
        </View>

      </ScrollView>
    );
  }
}

export default App;
