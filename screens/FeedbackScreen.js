import { StyleSheet, Text, View , TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../firebase' 

const FeedbackScreen = () => {
    const todoRef = firebase.firestore().collection('newData');
    const [addData,setAddData] = useState('');
    const navigation = useNavigation();

    const addField = () => {
        if(addData && addData.length>0)
        {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                heading : addData,
                createdAt : timestamp
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddData('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        }
        else
        {
            alert("no data");
        }
    }
  return (
    <SafeAreaView>
        <View>
            <Text style={tw`text-center  py-5 text-xl`}>Feedback</Text>
      </View>
      <View style={styles.textAreaContainer}>
         <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Please provide feedback of whatever you in your journey and help us to improve.You can give 
      us feedback related to any thing which can help us to improve."
      placeholderTextColor="grey"
    //   numberOfLines={10}
      multiline={true}
      onChangeText = {(heading) => setAddData(heading)}
      value = {addData}
    />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={addField}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default FeedbackScreen

const styles = StyleSheet.create({

    textAreaContainer: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start"
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
})