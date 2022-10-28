import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View , Platform, Dimensions, ScrollView} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import { store } from '../store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobScreen from './JobScreen';

const Welcomescreen = () => {

    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
          <Stack.Screen
            name = "HomeScreen"
            component={HomeScreen}
            options = {
              {
                headerShown: false,
              }
            }
          />
          <Stack.Screen
            name = "MapScreen"
            component={MapScreen}
            options = {
              {
                headerShown: false,
              }
            }
          />
          <Stack.Screen
            name = "JobScreen"
            component={JobScreen}
            options = {
              {
                headerShown: false,
              }
            }
          />
        </Stack.Navigator>
  )
}

export default Welcomescreen

const styles = StyleSheet.create({})