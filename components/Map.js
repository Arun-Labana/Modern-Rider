import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'

const Map = () => {
  return (
    <MapView
    style = {tw`flex-1`}
    initialRegion={{
      latitude: 12.980712,
      longitude: 74.803145,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
}

export default Map

const styles = StyleSheet.create({})