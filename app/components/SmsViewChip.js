import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function SmsViewChip({info}) {
  return (
    <View className="pb-4">
        <TouchableOpacity className="border bg-gray-100 space-y-2 rounded-lg p-2">
            <View>
                <View className="">
                    <Text className="font-bold uppercase">Contact</Text>
                    <Text className="text-gray-400">{info.contact}</Text>
                </View>
            </View>
            <View>
                <View className="">
                    <Text className="font-bold uppercase">Message</Text>
                    <Text className="text-gray-400">{info.message}</Text>
                </View>
            </View>
            <View>
                <View className="">
                    <Text className="font-bold uppercase">Schedule Time</Text>
                    <Text className="text-gray-400">{info.date} {info.end_time}</Text>
                </View>
            </View>
            <View>
                <View className="">
                    <Text className="font-bold uppercase">status</Text>
                    {
                        info.status == "pending"?
                        <Text className="text-red-400 capitalize">{info.status}</Text> :
                        <Text className="text-green-400 capitalize">{info.status}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}