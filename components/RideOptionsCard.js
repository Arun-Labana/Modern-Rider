import { StyleSheet, Text, View , Image} from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'



const data = [

    {
        id : "123",
        title : "Lamborghini",
        multiplier : 1,
        image : "https://links.papareact.com/3pn",
        travel_time : "50 minutes",
        price : "Rs.500"
    },
    {
        id : "456",
        title : "Ferrari",
        multiplier : 1.2,
        image : "https://links.papareact.com/5w8",
        travel_time : "40 minutes",
        price : "Rs.600"
    },
    {
        id : "789",
        title : "Buggati",
        multiplier : 1.75,
        image : "https://links.papareact.com/7pf",
        travel_time : "35 minutes",
        price : "Rs.800"
    }
]

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected,setSelected]  = useState(null);

  return (
    <SafeAreaView style={tw`bg-white -mt-5 flex-grow`}>
        <View>
            <Text style={tw`text-center  py-5 text-xl`}>Select A Ride</Text>
      </View>
      <FlatList
       data = {data}
       keyExtractor={(item) => item.id}
       renderItem={({item : {id, title , multiplier , image , travel_time , price}, item}) => (
        <TouchableOpacity
        onPress={() => {
            setSelected(item)
            navigation.navigate("FeedbackScreen")
        }}
         style={tw`flex-row justify-between items-center px-10 ${id=== selected?.id && "bg-gray-200"}`}
         >
            <Image
             style = {
                {
                    width : 100,
                    height : 100,
                    resizeMode : "contain"
                }
             }
             source = {{uri : image}}
            />
            <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text style={tw`text-lg`}>{travel_time}</Text>
            </View>
            <Text style={tw`text-xl font-semibold`}>{price}</Text>
        </TouchableOpacity>
       )}
      />
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})