import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'
import { RootStackParams } from '../types/RootStackParams'

const Stack = createNativeStackNavigator<RootStackParams>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation