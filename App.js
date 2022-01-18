import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, FlatList, Alert } from 'react-native';
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
    {title:"Bangladesh", subtitle:"This is the Asian Nation Country", image: "https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221_960_720.jpg"},
    {title:"India", subtitle:"This is the Asian Nation Country", image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"},
    {title:"Pakisthan", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2021/12/12/01/15/lotus-6863937_960_720.jpg"},
    {title:"China", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2022/01/13/15/18/man-6935496_960_720.jpg"},
    {title:"JAPAN", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2021/11/29/17/32/city-6833167_960_720.jpg"},
    {title:"SPAIN", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2022/01/12/15/40/angel-statue-6933216_960_720.jpg"},
    {title:"Portugal", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2021/08/02/05/17/sunflowers-6515860_960_720.jpg"},
    {title:"France", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2021/09/08/02/46/lotus-6605296_960_720.jpg"},
    {title:"Poland", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg"},
    {title:"Indonesia", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2012/12/09/00/16/abstract-69124_960_720.jpg"},
  ];

  ChildView = ({title, subtitle, thambnail}) => {
    return(
      <View style={{backgroundColor:"white", margin:5, flex:100, flexDirection:"row"}}>


      <View style={{flex:30}}>
        <Image source={{uri:thambnail}} style={{width:"100%", height:70}} />
      </View>

      <View style={{flex:70, padding:10}}>
      <Text onPress={this.onItemClick.bind(this, title)} style={{color:"black", fontSize: 18}}>{title}</Text>
        <Text style={{color:"black", fontSize: 16}}>{subtitle}</Text>
      </View>

      </View>
    )
  }

  onItemClick = (ShowTitle) => {
    Alert.alert(ShowTitle);
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
          <FlatList data={this.ListDataAsJSON} renderItem={({item}) => <this.ChildView title={item.title} subtitle={item.subtitle} thambnail={item.image} /> } />
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
