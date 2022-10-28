import { StyleSheet, Text, View , SafeAreaView , Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination , setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { color } from 'react-native-elements/dist/helpers';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const navigation = useNavigation()

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("LoginScreen")
        })
        .catch(error => alert(error.message))
    }

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
      <Text style={{
            alignContent : 'center',
            alignItems : 'center',
            marginTop : 30,
            fontSize : 40,
            textAlign : 'center',
            fontFamily : "monospace",
        }}>MODERN-RIDER</Text>
        <TextInput
          placeholder='where from?'
          styles={
            {
              container: {
                flex:0,
              },
              textInput:{
                fontSize: 18,
              },
              marginTop : 30
            }
          }
          onPress = { (data) => {
            dispatch(setOrigin({
              description: data.description
            }))
            dispatch(setDestination(null));
          }

          }
        />
        <NavOptions/>
        <NavFavourites/>
      </View>
      <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    white : {
      color : 'white'
    }
})