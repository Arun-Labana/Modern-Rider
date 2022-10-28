
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View , Platform, Dimensions, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import {store} from "./store"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import StartScreen from './screens/StartScreen';

const { height } = Dimensions.get("window")



export default function App() {

  const [screenHeight,setHeight] = useState(0);

  const Stack = createStackNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView  behavior="height"  style = {{flex : 1}}>
        <StartScreen/>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
