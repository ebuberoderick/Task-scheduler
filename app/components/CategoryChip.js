import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryChip = ({data,setActive, active}) => {
  return (
    <TouchableOpacity onPress={() => setActive(data)} className={`${active === data ? 'bg-rose-600':'bg-rose-50'} rounded-md p-3 mr-3`}>
      <Text className={`${active === data && 'text-white'}`}>{data}</Text>
    </TouchableOpacity>
  )
}

export default CategoryChip