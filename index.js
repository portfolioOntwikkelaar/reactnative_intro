//import libraries
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
import React from 'react';
import {AppRegistry, View} from 'react-native';
import CarList from './src/components/CarList';
import  Header  from './src/components/Header';

//create component
const App = () => {
  
  return (
  <View>
    <Header title={"Fiat"} />
    <CarList />

  </View>
  )
};
//render component to screen


AppRegistry.registerComponent('cars', () => App);
// AppRegistry.registerComponent(appName, () => App);
