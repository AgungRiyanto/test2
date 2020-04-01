/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import MainApp from './MainApp';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <MainApp />
    </SafeAreaView>
  );
};

export default App;

console.disableYellowBox = true;
