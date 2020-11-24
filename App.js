import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fb from './screens/fb';
import In from './screens/in';
import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
      <AppCointainer/>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const TabNavigator = createBottomTabNavigator({
  Facebook : { screens : Fb },
  Instagram : { screens : In },
});

const AppContainer = createAppContainer(TabNavigator);
