import { Text, SafeAreaView } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from '../screens/HomeScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import SigninScreen from '../screens/SigninScreen.js';
import ArabaScreen from '../ArabaScreen.js';
import DetailScreen from '../screens/DetailScreen.js';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Araba' component={ArabaScreen}/>
        <Stack.Screen name='Detail' component={DetailScreen}/>
         <Stack.Screen name='SignIn' component={SigninScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}   