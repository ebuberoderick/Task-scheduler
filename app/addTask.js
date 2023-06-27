import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import CategoryChip from './components/CategoryChip';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';

const addTask = () => {
    const { colorScheme } = useColorScheme();
    const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
    const List = ['design', 'learning', 'integration', 'implementation', 'study', 'programming', 'build', 'development']
    List.push('CJDL51kPNwl')
    const [activeCategory, setActiveCategory] = useState('design')
    const [showPicker, setShowPicker] = useState(false)
    const [date, setDate] = useState(new Date())

    return (
        <View className="flex flex-1 bg-white dark:bg-gray-900 space-y-3 h-screen w-screen p-3 pt-0" >
            <StatusBar style={statusBarTheme} />
            <Stack.Screen
                options={{
                    title: 'Add Task',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: colorScheme === 'dark' ? '#111827' : '#fff' },
                    headerTitleStyle: {
                        color: colorScheme === 'dark' ? '#fff' : '#000'
                    }
                }}
            />
            <View>
                <Text className="font-extrabold text-2xl dark:text-white">Task Title</Text>
                <View className="flex">
                    <TextInput autoCapitalize='sentences' autoFocus placeholder="Enter task title" maxLength={40} onChangeText={(e) => console.log(e)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
            </View>
            <View className="space-y-1">
                <Text className="font-extrabold text-2xl dark:text-white">Category</Text>
                <FlatList
                    data={List}
                    renderItem={({ item }) => <CategoryChip data={item} active={activeCategory} setActive={(e) => setActiveCategory(e)} />}
                    keyExtractor={item => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <Text className="font-extrabold text-2xl dark:text-white">Date</Text>
                <View className="flex">
                    <TextInput autoCapitalize='sentences' name="hi" placeholder="Enter task title" maxLength={40} onChangeText={(e) => console.log(e)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
            </View>
            <View className="flex flex-row gap-x-3">
                <View className="flex-grow">
                    <Text className="font-extrabold text-2xl dark:text-white">Start Time</Text>
                    <View className="flex">
                        <TextInput editable placeholder="Enter task description" onChangeText={(e) => console.log(e)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                    </View>
                </View>
                <View className="flex-grow">
                    <Text className="font-extrabold text-2xl dark:text-white">End Time</Text>
                    <View className="flex">
                        <TextInput editable placeholder="Enter task description" onChangeText={(e) => console.log(e)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                    </View>
                </View>
            </View>
            <View>
                <Text className="font-extrabold text-2xl dark:text-white">Task Description</Text>
                <View className="flex">
                    <TextInput multiline editable placeholder="Enter task description" onChangeText={(e) => console.log(e)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
            </View>
            <TouchableOpacity className="py-4 relative top-9 rounded-md bg-rose-500">
                <Text className="text-white text-center">Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default addTask