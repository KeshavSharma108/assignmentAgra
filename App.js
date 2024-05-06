import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Data from './Screens/data';


const Stack = createNativeStackNavigator();




export default function RootNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator> 
        <Stack.Screen name='Data' component={Data}/>
  
    </Stack.Navigator>
  </NavigationContainer>
  )
}


