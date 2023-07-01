import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryChip = ({ data, setActive, active }) => {
  return (
    data === "CJDL51kPNwl" ?
      <TouchableOpacity className="rounded-full bg-rose-600 w-10 h-10 flex items-center justify-center">
        <Text className="text-white text-3xl relative bottom-[2px]">+</Text>
      </TouchableOpacity> :
      <TouchableOpacity onPress={() => setActive(data)} className={`${active === data ? 'bg-rose-600' : 'bg-rose-50'} rounded-md p-3 mr-3`}>
        <Text className={`${active === data && 'text-white'}`}>{data}</Text>
      </TouchableOpacity>
  )
}

export default CategoryChip