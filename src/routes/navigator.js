import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/Categories';
import Details from '../screens/Details';
import AddDetails from '../screens/AddDetails';
import AllDetails from '../screens/AllDetails';
import AboutUs from '../screens/AboutUs';
const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor: '#000'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AddDetails" component={AddDetails} />
        <Stack.Screen name="AllDetails" component={AllDetails} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
