import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Stack, useRouter } from 'expo-router';
import TaskChip from './components/TaskChip';

const profile = () => {
    const router = useRouter();
    const {colorScheme , toggleColorScheme} = useColorScheme();
    const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
    return (
        <ScrollView className="flex flex-1 space-y-4 bg-white h-screen w-screen p-3 pt-0" >
            <StatusBar style={statusBarTheme} />
            <Stack.Screen
                options={{
                    title: '',
                    headerShadowVisible: false,
                }}
            />
            <View className="flex relative bottom-2 flex-col gap-2 items-center">
                <View className="border-2 border-rose-500 p-1 relative rounded-full">
                    <View className="h-44 w-44 bg-rose-100 rounded-full"></View>
                    <TouchableOpacity onPress={() => router.push(`addTask`)} className="h-12 w-12 flex items-center justify-center bg-rose-600 absolute bottom-0 rounded-full right-4">
                        <Text className="text-white text-4xl">+</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-grow">
                    <View>
                        <Text className="text-2xl font-extrabold text-center">Ebube Roderick</Text>
                        <Text className="text-base text-gray-400 text-center">ebuberoderick2@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View className="flex-1 items-center justify-center dark:bg-gray-950">
                <Switch value={colorScheme === 'dark'} onChange={() => toggleColorScheme()} />
                <Text className="dark:text-white">Open up App.js to start working on your app!</Text>
            </View>
        </ScrollView>
    )
}

export default profile