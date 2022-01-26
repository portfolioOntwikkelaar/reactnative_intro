//import libraries
import React from 'react';
import { Text } from 'react-native';
//create component
const Header = () => {
  const {textStyling} = styles;
  // const textStyling = styles.textStyling;
  return <Text style={textStyling}>Fiat</Text>;
};

const styles = {
  textStyling: {
    fontSize: 22
  }
}
//make component available to other components;
export default Header;