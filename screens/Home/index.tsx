import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TNavigationHomeProps } from '../../types/NavigationProps'
import { useNavigation } from '@react-navigation/core'
import { RootStackParams } from '../../types/RootStackParams'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Home = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button onPress={() => {
        navigation.navigate('ProductDetail', {
          productId: "1"
        })
      }} title="View product"></Button>
    </SafeAreaView>
  )
}

export default Home