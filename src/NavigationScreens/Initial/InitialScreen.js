import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import MainScreen from '../../MainScreen'

import { styles } from '../../helpers'

export default class StartScreen extends MainScreen {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.flexCenteredCont}>
                    <Text>READY</Text>
                </View>
            </SafeAreaView>
        );
    }
};



