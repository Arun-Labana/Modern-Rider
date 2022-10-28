import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const StartScreen = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
            <Stack.Screen
              name = "LoginScreen"
              component={LoginScreen}
              options = {
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name = "WelcomeScreen"
              component={WelcomeScreen}
              options = {
                {
                  headerShown: false,
                }
              }
            />
          </Stack.Navigator>
    )
}

export default StartScreen

const styles = StyleSheet.create({})