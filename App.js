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

  JSONdataForHorizontalListView = [
    {id:1, title:"Dhaka", subtitle:"This is the Capital of Bangladesh", image: "https://cdn.pixabay.com/photo/2021/10/18/19/04/mountains-6721870_960_720.jpg"},
    {id:2, title:"Dhilli", subtitle:"This is the Capital of INDIA", image: "https://cdn.pixabay.com/photo/2020/09/18/21/12/person-5582976_960_720.jpg"},
    {id:3, title:"Islamabad", subtitle:"This is the Capital of Pakisthan", image:"https://cdn.pixabay.com/photo/2022/01/02/04/37/animal-6909429_960_720.jpg"},
    {id:4, title:"Beiging", subtitle:"This is the Capital of China", image:"https://cdn.pixabay.com/photo/2021/12/19/20/43/clouds-6881917_960_720.jpg"},
    {id:5, title:"Tokio", subtitle:"This is the Capital of Japan", image:"https://cdn.pixabay.com/photo/2017/02/28/02/58/girl-2104756_960_720.jpg"},
    {id:6, title:"MadDrid", subtitle:"This is the Capital of SPAIN", image:"https://cdn.pixabay.com/photo/2021/10/18/19/04/mountains-6721870_960_720.jpg"},
    {id:7, title:"Lisbon", subtitle:"This is the Capital of Portugal", image:"https://cdn.pixabay.com/photo/2016/03/29/03/12/girl-1287375_960_720.jpg"},
    {id:8, title:"France", subtitle:"This is the Capital of Franche", image:"https://cdn.pixabay.com/photo/2020/05/17/19/01/pray-5183171_960_720.jpg"},
    {id:9, title:"Poland", subtitle:"This is the Capital of Poland", image:"https://cdn.pixabay.com/photo/2021/07/30/20/23/paris-6510643_960_720.jpg"},
    {id:10, title:"Zakarta", subtitle:"This is the Capital of Indonesia", image:"https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_960_720.jpg"},
  ];

  HorizontalChildView = ({title, subtitle, thambnail}) => {
    return(
      <View style={{backgroundColor:"gray", margin:5, flexDirection:"column", width:200, height:200}}>


      <View>
        <Image source={{uri:thambnail}} style={{width:"100%", height:100}} />
      </View>

      <View style={{padding:10}}>
      <Text onPress={this.onItemClick.bind(this, title)} style={{color:"yellow", fontSize: 18}}>{title}</Text>
        <Text style={{color:"black", fontSize: 16}}>{subtitle}</Text>
      </View>

      </View>
    )
  }

  JSONdataForVerticalListView = [
    {id:1, title:"Bangladesh", subtitle:"This is the Asian Nation Country", image: "https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221_960_720.jpg"},
    {id:2, title:"India", subtitle:"This is the Asian Nation Country", image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"},
    {id:3, title:"Pakisthan", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2021/12/12/01/15/lotus-6863937_960_720.jpg"},
    {id:4, title:"China", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2022/01/13/15/18/man-6935496_960_720.jpg"},
    {id:5, title:"JAPAN", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2021/11/29/17/32/city-6833167_960_720.jpg"},
    {id:6, title:"SPAIN", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2022/01/12/15/40/angel-statue-6933216_960_720.jpg"},
    {id:7, title:"Portugal", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2021/08/02/05/17/sunflowers-6515860_960_720.jpg"},
    {id:8, title:"France", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2021/09/08/02/46/lotus-6605296_960_720.jpg"},
    {id:9, title:"Poland", subtitle:"This is the Europian Nation Country", image:"https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg"},
    {id:10, title:"Indonesia", subtitle:"This is the Asian Nation Country", image:"https://cdn.pixabay.com/photo/2012/12/09/00/16/abstract-69124_960_720.jpg"},
  ];

  VerticalChildView = ({title, subtitle, thambnail}) => {
    return(
      <View style={{backgroundColor:"white", margin:5, flex:100, flexDirection:"row"}}>


      <View style={{flex:30}}>
        <Image source={{uri:thambnail}} style={{width:"100%", height:70}} />
      </View>

      <View style={{flex:70, padding:10}}>
      <Text onPress={this.onItemClick.bind(this, title)} style={{color:"red", fontSize: 18}}>{title}</Text>
        <Text style={{color:"black", fontSize: 16}}>{subtitle}</Text>
      </View>

      </View>
    )
  }


  JSONdataForVerticalGridView = [
    {id:1, title:"Bijoy Software", subtitle:"Computer Programmer", image: "https://cdn.pixabay.com/photo/2021/12/02/02/59/mountains-6839521_960_720.jpg"},
    {id:2, title:"Channel i", subtitle:"Wordpress Developer", image: "https://cdn.pixabay.com/photo/2019/06/09/10/22/lily-4261793_960_720.jpg"},
    {id:3, title:"Cosmos MultiNational", subtitle:"Laravel and PHP Developer", image:"https://cdn.pixabay.com/photo/2022/01/15/15/30/lantern-6939870_960_720.jpg"},
    {id:4, title:"Tech Vision orope Orion", subtitle:"Android App Developer and Backend", image:"https://cdn.pixabay.com/photo/2020/02/04/17/07/coffee-4818863_960_720.jpg"},
    {id:5, title:"Code Boxer", subtitle:"Wordpress Plugin Developer", image:"https://cdn.pixabay.com/photo/2021/06/12/04/56/couple-6330001_960_720.png"},
    {id:6, title:"Amir Group", subtitle:"Senior Programmer Laravel", image:"https://cdn.pixabay.com/photo/2020/02/06/18/43/santorini-4825173_960_720.jpg"},
    {id:7, title:"Code2Creation", subtitle:"Full Stack Developer", image:"https://cdn.pixabay.com/photo/2022/01/16/10/01/fantasy-6941630_960_720.jpg"},
    {id:8, title:"Yet to Come", subtitle:"Waiting for Next Chalange", image:"https://cdn.pixabay.com/photo/2021/11/20/05/15/car-6810885_960_720.jpg"},
    {id:9, title:"Yet to Come", subtitle:"Waiting for Next Chalange", image:"https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607_960_720.jpg"},
    {id:10, title:"Yet to Come", subtitle:"Waiting for Next Chalange", image:"https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_960_720.jpg"},
  ];

  VerticalGridChildView = ({title, subtitle, thambnail}) => {
    return(
      <View style={{backgroundColor:"white", margin:5, flexDirection:"column", width:170, height:200}}>


      <View>
        <Image source={{uri:thambnail}} style={{width:"100%", height:100}} />
      </View>

      <View style={{padding:10}}>
      <Text onPress={this.onItemClick.bind(this, title)} style={{color:"yellow", fontSize: 18}}>{title}</Text>
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

        <View>
        <Text style={{color:"black"}}>The below content is exmple of external styling and Horizontal Flat List:</Text>
          <FlatList keyExtractor={item=>item.id} horizontal={true} data={this.JSONdataForHorizontalListView} renderItem={({item}) => <this.HorizontalChildView title={item.title} subtitle={item.subtitle} thambnail={item.image} /> } />
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
        <Text style={{color:"black"}}>The below content is exmple of external styling and Vertical Flat List:</Text>
          <FlatList keyExtractor={item=>item.id} data={this.JSONdataForVerticalListView} renderItem={({item}) => <this.VerticalChildView title={item.title} subtitle={item.subtitle} thambnail={item.image} /> } />
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
        <Text style={{color:"black"}}>The below content is exmple of external styling and Horizontal Flat List:</Text>
          <FlatList keyExtractor={item=>item.id} numColumns={2} horizontal={false} data={this.JSONdataForVerticalGridView} renderItem={({item}) => <this.HorizontalChildView title={item.title} subtitle={item.subtitle} thambnail={item.image} /> } />
        </View>

        <View>
        <Text style={{color:"black"}}>The below content is exmple of external styling and Horizontal Scroll:</Text>
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
