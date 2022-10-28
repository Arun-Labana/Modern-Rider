import { StyleSheet, Text, View , Image} from 'react-native'
import React, { useState } from 'react'
import JobScreen1 from './JobScreen1'
import JobScreen2 from './JobScreen2'
import { createStackNavigator } from '@react-navigation/stack'


const JobScreen = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
            <Stack.Screen
              name = "JobScreen1"
              component={JobScreen1}
              options = {
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name = "JobScreen2"
              component={JobScreen2}
              options = {
                {
                  headerShown: false,
                }
              }
            />
          </Stack.Navigator>
    )
}

export default JobScreen

const styles = StyleSheet.create({})