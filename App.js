import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Navigator from './src/NavigationScreens/Navigator'
import store from './src/store/reducers'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigator />
      </Provider>
    )
  }
};


