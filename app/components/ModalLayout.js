import { View, Text } from 'react-native'
import React from 'react'

const ModalLayout = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default ModalLayout