import React, { Component } from 'react';
import { View } from 'react-native';
import ComponentFour from '../components/ComponentFour';
import ComponentOne from '../components/ComponentOne';
import ComponentThree from '../components/ComponentThree';
import ComponentTwo from '../components/ComponentTwo';

class PageOne extends Component {
    render() {
        return (
            <View>
                <ComponentOne />
                <ComponentTwo />
                <ComponentThree />
                <ComponentFour />
            </View>
        );
    }
}

export default PageOne;
