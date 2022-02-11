// In App.js in a new project

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  // start - setup reactotron
  useEffect(() => {
    if (__DEV__) {
      import('./config/reactotronConfig').then(() =>
        console.log('Reactotron Configured'),
      );
    }
  }, []);
  // end - setup reactotron

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
