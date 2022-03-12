import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/drawNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}
