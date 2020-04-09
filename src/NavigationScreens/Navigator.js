import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { screenPath } from '../helpers'

import InitialScreen from './Initial/InitialScreen'

const Navigator = createStackNavigator({

    InitialScreen: {
        screen: InitialScreen,
        navigationOptions: () => ({
            headerShown: false,
            ...TransitionPresets.ModalTransition,
        })
    },

}, {
    initialRouteName: screenPath.InitialScreen,
    animationEnabled: false
})


export default createAppContainer(Navigator);