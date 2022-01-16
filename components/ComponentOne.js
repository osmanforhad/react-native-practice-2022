import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ComponentOne extends Component {
    render() {
        return (
          <View>
              <Text>Developer Name: {this.props.name}</Text>
              <Text>Present Address: {this.props.city}</Text>
              <Text>The name and city property come from app.js file which is the parent file of this ComponentOne file and component one is the child file which recive props or param from parent file app.js</Text>
          </View>
        );
    }
}

export default ComponentOne;
