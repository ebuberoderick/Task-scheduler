import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProgressBar extends Component {
    render() {
        return (
            <View>
                <View className="w-auto flex flex-row pb-1 px-1 justify-between">
                    <Text className="text-white">6</Text>
                    <Text className="text-white">12</Text>
                </View>
                <View className="bg-red-400  rounded-md overflow-hidden">
                    <View className="p-1 bg-white rounded-md relative -left-[50%]" />
                </View>
            </View>
        )
    }
}