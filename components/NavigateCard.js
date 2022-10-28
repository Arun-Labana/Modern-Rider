import { StyleSheet, Text, View , SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import NavFavourites from './NavFavourites'
import NewCard from './NewCard'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [city, setData] = useState("");
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello My Friend</Text>
      <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Where to?"
               value={city}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={(text) => setData(text)}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                    dispatch(setDestination({
                        location : city,
                        description: city
                      }));
                      navigation.navigate('RideOptionsCard')
                  }
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <NavFavourites></NavFavourites>
         </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })