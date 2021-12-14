// In App.js in a new project

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Splash} from './screens';
import Router from './router';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    if (__DEV__) {
      import('./config/reactotronConfig').then(() =>
        console.log('Reactotron Configured'),
      );
    }
  }, []);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
