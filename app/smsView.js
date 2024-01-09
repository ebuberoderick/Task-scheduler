import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import CategoryChip from './components/CategoryChip';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import useFormHandler from './hooks/formHandler';
import DateTime from './components/DateTime';
import SmsViewChip from './components/SmsViewChip';

const AddTask = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const { colorScheme } = useColorScheme();
    const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
    const List = ['design', 'learning', 'integration', 'implementation', 'study', 'programming', 'build', 'development']
    const schedule = useSelector((state) => state.schedule.schedule)
    const [showDate, setShowDate] = useState(false)
    const [showStartTime, setShowStartTime] = useState(false)
    const [showEndTime, setShowEndTime] = useState(false)

    const formHandler = useFormHandler({
        required: {
            title: 'Please enter your task title',
            category: 'No category',
            date: 'Please enter a date',
            start_time: 'Please enter the start time',
            end_time: 'Please enter the end time',
            description: 'Please enter some description about your task'
        },
        initialValues: {
            _id: new Date().getFullYear() + '' + new Date().getMonth() + '' + new Date().getDate() + '' + new Date().getHours() + '' + new Date().getMinutes() + '' + new Date().getSeconds(),
            status: 'pending',
            title: '',
            category: List[0] || '',
            date: '',
            start_time: '',
            end_time: '',
            description: ''
        },
        onSubmit: async (value) => {
            dispatch({ type: "ADD_TASK", payload: value })
            router.push('/')
        }
    })


    return (
        <View className="flex flex-1 bg-white dark:bg-gray-900 space-y-3 min-h-screen w-screen p-3 pt-0" >
            <DateTime
                showDate={showDate}
                showStartTime={showStartTime}
                showEndTime={showEndTime}
                setShowDate={(e) => { setShowDate(false), formHandler.value.date = e }}
                setShowStartTime={(e) => { setShowStartTime(false), formHandler.value.start_time = e }}
                setShowEndTime={(e) => { setShowEndTime(false), formHandler.value.end_time = e }}
            />
            <StatusBar style={statusBarTheme} />
            <Stack.Screen
                options={{
                    title: 'Schedule Message',
                    headerBackVisible: true,
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: colorScheme === 'dark' ? '#111827' : '#fff' },
                    headerTitleStyle: {
                        color: colorScheme === 'dark' ? '#fff' : '#000'
                    }
                }}
            />
            {
                schedule.length > 0 ?
                <View className="pb-8">
                    <FlatList
                        data={schedule}
                        renderItem={({ item }) => <SmsViewChip info={item}/>}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>:
                <View className="flex h-full items-center justify-center">
                    <Text className="text-gray-400 uppercase">no Scheduled Message</Text>
                </View>
            }
        </View>
    )
}

export default AddTask