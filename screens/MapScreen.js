import React from 'react'
import {StyleSheet , Text, View} from "react-native"
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from '../components/RideOptionsCard';
import NewCard from '../components/NewCard';
import FeedbackScreen from './FeedbackScreen';

const MapScreen = () => {

    const Stack = createStackNavigator();

  return (
      <View>
        <View style={tw`h-1/2`}>
            <Map/>
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen
                    name = "NavigateCard"
                    component={NavigateCard}
                    options = {{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name = "NewCard"
                    component={NewCard}
                    options = {{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                  name = "RideOptionsCard"
                  component={RideOptionsCard}
                  options = {{
                      headerShown: false,
                  }}
                />
                <Stack.Screen
                  name = "FeedbackScreen"
                  component={FeedbackScreen}
                  options = {{
                      headerShown: false,
                  }}
                />
            </Stack.Navigator>
        </View>
      </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
