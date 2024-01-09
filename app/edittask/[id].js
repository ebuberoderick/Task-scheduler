import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter, useSearchParams } from 'expo-router';
import CategoryChip from '../components/CategoryChip';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import useFormHandler from '../hooks/formHandler';
import DateTime from '../components/DateTime';

const EditTask = () => {
  const router = useRouter();
  const params = useSearchParams()
  const tasks = useSelector((state) => state.task.task)
  const data = tasks.filter(task => task._id === params.id)
  const dispatch = useDispatch()
  const { colorScheme } = useColorScheme();
  const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
  const List = ["Lunch", "Meeting", "Presentation", "Supervision", "Travel", "Errands", "Obligations", "Work"]
  // List.push('CJDL51kPNwl')
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
      _id: data[0]._id,
      status: data[0].status,
      title: data[0].title,
      category: data[0].category,
      date: data[0].date,
      start_time: data[0].start_time,
      end_time: data[0].end_time,
      description: data[0].description
    },
    onSubmit: async (value) => {
      dispatch({ type: "EDIT_TASK", payload: value })
      router.push(`details/${value._id}`)
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
          title: 'Edit Task',
          headerBackVisible: true,
          headerLeft: () => {
            <TouchableOpacity onPress={() => router.back()}>
              <Text>Back</Text>
            </TouchableOpacity>
          },
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
          <TextInput autoCapitalize='sentences' autoFocus placeholder="Enter task title" maxLength={40} onChangeText={formHandler.handlerChange('title')} value={formHandler.value.title} className="bg-white text-base dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
        </View>
        {formHandler.error?.title && <Text className="text-red-500">{formHandler.error.title}</Text>}
      </View>
      <View className="space-y-1">
        <Text className="font-extrabold text-2xl dark:text-white">Category</Text>
        <FlatList
          data={List}
          renderItem={({ item }) => <CategoryChip data={item} active={formHandler.value.category} setActive={formHandler.handlerChange('category')} />}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {formHandler.error?.category && <Text className="text-red-500">{formHandler.error.category}</Text>}
      </View>
      <View className="">
        <Text className="font-extrabold text-2xl dark:text-white">Set Date</Text>
        <View className="flex">
          <TouchableOpacity onPress={() => setShowDate(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
            <Text className=" text-base">{formHandler.value.date === '' ? 'Set Task Date' : formHandler.value.date}</Text>
          </TouchableOpacity>
        </View>
        {formHandler.error?.date && <Text className="text-red-500">{formHandler.error.date}</Text>}
      </View>
      <View className="flex flex-row gap-x-3">
        <View className="flex-grow">
          <Text className="font-extrabold text-2xl dark:text-white">Start Time</Text>
          <View className="flex">
            <TouchableOpacity onPress={() => setShowStartTime(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
              <Text className=" text-base">{formHandler.value.start_time === '' ? 'Set start time' : formHandler.value.start_time}</Text>
            </TouchableOpacity>
          </View>
          {formHandler.error?.start_time && <Text className="text-red-500">{formHandler.error.start_time}</Text>}
        </View>
        <View className="flex-grow">
          <Text className="font-extrabold text-2xl dark:text-white">End Time</Text>
          <View className="flex">
            <TouchableOpacity onPress={() => setShowEndTime(true)} className="bg-white dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 py-3 border-gray-300 rounded-md">
              <Text className=" text-base">{formHandler.value.end_time === '' ? 'Set end time' : formHandler.value.end_time}</Text>
            </TouchableOpacity>
          </View>
          {formHandler.error?.end_time && <Text className="text-red-500">{formHandler.error.end_time}</Text>}
        </View>
      </View>
      <View>
        <Text className="font-extrabold text-2xl dark:text-white">Task Description</Text>
        <View className="flex">
          <TextInput multiline editable placeholder="Enter task description" onChangeText={formHandler.handlerChange('description')} value={formHandler.value.description} className="bg-white text-base dark:bg-gray-700 dark:border-none dark:text-white dark:placeholder:text-white border p-2 border-gray-300 rounded-md" />
        </View>
        {formHandler.error?.description && <Text className="text-red-500">{formHandler.error.description}</Text>}
      </View>
      <TouchableOpacity onPress={() => formHandler.submit()} className="py-3 rounded-md bg-rose-500">
        <Text className="text-white text-center text-lg">Update Task</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default EditTask