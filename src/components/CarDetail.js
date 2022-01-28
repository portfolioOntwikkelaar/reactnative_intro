import React from 'react'
import { Text, View} from 'react-native'

const CarDetail =(props)=> {
  return (
    <View>
      <Text>{props.brand.model[1].name}</Text>
      
    </View>
  );
};
export default CarDetail