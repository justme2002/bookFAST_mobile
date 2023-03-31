import { View, Text } from 'react-native'
import React from 'react'
import { TNavigationProductDetailProps } from '../../types/NavigationProps'

const ProductDetail : React.FC<TNavigationProductDetailProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>ProductDetail: {route.params.productId}</Text>
    </View>
  )
}

export default ProductDetail