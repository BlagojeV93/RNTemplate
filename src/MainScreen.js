import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

export default class MainScreen extends Component {

    pushNewScreen = (newScreenAtributeValue) => {
        clearTimeout(this.timeoutNavigationPushScreen)
        this.timeoutNavigationPushScreen = setTimeout(() => {
            this.props.navigation.navigate(newScreenAtributeValue)
        }, 100);
    }

    closeScreen = () => {
        this.props.navigation.goBack()
    }

    resetNavigationStack = (routeName) => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName,key:`${Math.random()}` })],
        })
        this.props.navigation.dispatch(resetAction)
    }

    replaceScreenNavigationStack = (routeName) => {
        const pushAction = StackActions.replace({
            routeName
        });
        this.props.navigation.dispatch(pushAction);
    }
}
