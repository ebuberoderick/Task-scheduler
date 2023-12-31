import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import CategoryChip from './components/CategoryChip';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useDispatch } from 'react-redux';
import useFormHandler from './hooks/formHandler';
import DateTime from './components/DateTime';
import Toast from 'react-native-root-toast';

const AddTask = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const { colorScheme } = useColorScheme();
    const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
    const List = ['design', 'learning', 'integration', 'implementation', 'study', 'programming', 'build', 'development']
    List.push('CJDL51kPNwl')
    const [showDate, setShowDate] = useState(false)
    const [showStartTime, setShowStartTime] = useState(false)
    const [showEndTime, setShowEndTime] = useState(false)
    const formHandler = useFormHandler({
        required: {
            contact: 'Please enter contact number',
            message: 'Please enter the message body',
            date: 'Please set a date',
            end_time: 'Please set time',
        },
        initialValues: {
            _id: new Date().getFullYear() + '' + new Date().getMonth() + '' + new Date().getDate() + '' + new Date().getHours() + '' + new Date().getMinutes() + '' + new Date().getSeconds(),
            status: 'pending',
            contact: '',
            date: '',
            end_time: '',
            message: ''
        },
        onSubmit: async (value) => {
            ToastAndroid.show('Message Scheduled!', ToastAndroid.SHORT);
            // <ToastNotification visible={this.state.visible}>Thanks for subscribing!</ToastNotification>
            dispatch({ type: "ADD_SCHEDULE", payload: value })
            router.push("/")
        }
    })


    return (
        <ScrollView className="flex flex-1 bg-white dark:bg-gray-900 space-y-3 min-h-screen w-screen p-3 pt-0" >
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
                    title: 'New Message',
                    headerBackVisible: true,
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: colorScheme === 'dark' ? '#111827' : '#fff' },
                    headerTitleStyle: {
                        color: colorScheme === 'dark' ? '#fff' : '#000'
                    }
                }}
            />
            <View>
                <Text className="font-extrabold text-2xl dark:text-white">Contact Number</Text>
                <View className="flex">
                    <TextInput keyboardType="numeric"  maxLength={11} editable placeholder="Enter Contact Number" onChangeText={formHandler.handlerChange('contact')} value={formHandler.value.contact} className="bg-white text-base dark:bg-gray-700 dark:border-none dark:text-white border p-2 border-gray-300 rounded-md" />
                </View>
                {formHandler.error?.contact && <Text className="text-red-500">{formHandler.error.contact}</Text>}
            </View>
            <View>
                <Text className="font-extrabold text-2xl dark:text-white">Message Body</Text>
                <View className="flex">
                    <TextInput multiline editable placeholder="Enter Message Body" numberOfLines={4} onChangeText={formHandler.handlerChange('message')} value={formHandler.value.message} className="bg-white text-base h-44 dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
                {formHandler.error?.message && <Text className="text-red-500">{formHandler.error.message}</Text>}
            </View>
            <View className="flex flex-row gap-x-3">
                <View className="flex-grow">
                    <Text className="font-extrabold text-2xl dark:text-white">Set Date</Text>
                    <View className="flex">
                        <TouchableOpacity onPress={() => setShowDate(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
                            <Text className=" text-base">{formHandler.value.date === '' ? 'Set Date' : formHandler.value.date}</Text>
                        </TouchableOpacity>
                    </View>
                    {formHandler.error?.date && <Text className="text-red-500">{formHandler.error.date}</Text>}
                </View>
                <View className="flex-grow">
                    <Text className="font-extrabold text-2xl dark:text-white">Set Time</Text>
                    <View className="flex">
                        <TouchableOpacity onPress={() => setShowEndTime(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
                            <Text className=" text-base">{formHandler.value.end_time === '' ? 'Set time' : formHandler.value.end_time}</Text>
                        </TouchableOpacity>
                    </View>
                    {formHandler.error?.end_time && <Text className="text-red-500">{formHandler.error.end_time}</Text>}
                </View>
            </View>
            <TouchableOpacity onPress={() => formHandler.submit()} className="py-3 rounded-md bg-rose-500">
                <Text className="text-white text-center text-lg">Save Schedule</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default AddTask