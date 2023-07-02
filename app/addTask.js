import { View, Text, TextInput, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import CategoryChip from './components/CategoryChip';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import DatePicker from 'react-native-date-picker'
import { useDispatch } from 'react-redux';
import useFormik from './hooks/formik';
import DateTime from './components/DateTime';

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
    const formik = useFormik({
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
        <View className="flex flex-1 bg-white dark:bg-gray-900 space-y-3 h-screen w-screen p-3 pt-0" >
            <DateTime
                showDate={showDate}
                showStartTime={showStartTime}
                showEndTime={showEndTime}
                setShowDate={(e)=> {setShowDate(false),formik.value.date=e}}
                setShowStartTime={(e)=> {setShowStartTime(false),formik.value.start_time=e}}
                setShowEndTime={(e)=> {setShowEndTime(false),formik.value.end_time=e}}
            />
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
                    <TextInput autoCapitalize='sentences' autoFocus placeholder="Enter task title" maxLength={40} onChangeText={formik.handlerChange('title')} value={formik.value.title} className="bg-white text-base dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
            </View>
            <View className="space-y-1">
                <Text className="font-extrabold text-2xl dark:text-white">Category</Text>
                <FlatList
                    data={List}
                    renderItem={({ item }) => <CategoryChip data={item} active={formik.value.category} setActive={formik.handlerChange('category')} />}
                    keyExtractor={item => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {/* <View>
                <Text className="font-extrabold text-2xl dark:text-white">Date</Text>
                <View className="flex">
                    <TextInput placeholder="Enter task Date" onChangeText={formik.handlerChange('date')} value={formik.value.date} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
            </View> */}
            <View className="">
                <Text className="font-extrabold text-2xl dark:text-white">Set Date</Text>
                <View className="flex">
                    <TouchableOpacity onPress={() => setShowDate(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
                        <Text className=" text-base">{formik.value.date === '' ? 'Set Task Date' : formik.value.date}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex flex-row gap-x-3">
                <View className="flex-grow">
                    <Text className="font-extrabold text-2xl dark:text-white">Start Time</Text>
                    <View className="flex">
                        <TouchableOpacity onPress={() => setShowStartTime(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
                            <Text className=" text-base">{formik.value.start_time === '' ? 'Set start time' : formik.value.start_time}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="flex-grow">
                    <Text className="font-extrabold text-2xl dark:text-white">End Time</Text>
                    <View className="flex">
                        <TouchableOpacity onPress={() => setShowEndTime(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
                            <Text className=" text-base">{formik.value.end_time === '' ? 'Set end time' : formik.value.end_time}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <Text className="font-extrabold text-2xl dark:text-white">Task Description</Text>
                <View className="flex">
                    <TextInput multiline editable placeholder="Enter task description" onChangeText={formik.handlerChange('description')} value={formik.value.description} className="bg-white text-base dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
                </View>
            </View>
            <TouchableOpacity onPress={() => formik.handlerSubmit()} className="py-3 relative top-9 rounded-md bg-rose-500">
                <Text className="text-white text-center text-lg">Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTask