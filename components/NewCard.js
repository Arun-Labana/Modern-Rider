import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NewCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello My Friend</Text>
      <View style = {styles.container}>
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
         </View>
    </SafeAreaView>
  )
}

export default NewCard

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