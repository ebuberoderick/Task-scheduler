import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Stack, useRouter } from 'expo-router';
import TaskChip from '../components/TaskChip';

const TaskDetails = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
  return (
    <ScrollView className="flex flex-1 space-y-4 bg-white dark:bg-gray-900 h-screen w-screen p-3 pt-0" >
      <StatusBar style={statusBarTheme} />
      <Stack.Screen
        options={{
          title: 'Task Details',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colorScheme === 'dark' ? '#111827' : '#fff'},
          headerTitleStyle: {
            color: colorScheme === 'dark' ? '#fff' : '#000'
          }
        }}
      />
      <View className="">
        <Text className="font-extrabold text-3xl dark:text-white">Task Title</Text>
        <Text className="text-lg relative bottom-1 text-gray-400">Category</Text>
      </View>
      <View className="flex relative bottom-2 flex-row gap-2 items-center">
        <View className="h-9 w-9 bg-gray-400 rounded-full"></View>
        <View className="flex-grow">
          <View>
            <Text className="text-base dark:text-white">09-06-2023 , 09:00am - 11:00am</Text>
          </View>
        </View>
      </View>
      <View className="w-full flex flex-row pb-1 px-1 justify-between">
        <View className="py-3 px-5 bg-rose-500 rounded-md"><Text className="text-white">Status</Text></View>
      </View>
      <View>
        <Text className="font-extrabold text-2xl dark:text-white">Task Description</Text>
        <Text className="text-base relative bottom-1 text-gray-400">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </Text>
      </View>
      <View className="flex flex-row justify-between items-center">
        <Text className="font-extrabold text-2xl dark:text-white">Upcoming Task</Text>
        <TouchableOpacity onPress={()=> router.push(`addTask`)} className="flex items-center flex-row gap-x-2 py-2 bg-rose-500 rounded-md px-4">
          <Text className="text-xl pb-1 text-white">+</Text>
          <Text className="text-white">Add Task</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
            <TaskChip data={value} key={index} />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default TaskDetails