import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import TaskChip from '../components/TaskChip';
import { useSelector } from 'react-redux';
import TaskDetailsComponent from '../components/TaskDetails';

const TaskDetails = () => {
  const router = useRouter();
  const params = useSearchParams()
  const tasks = useSelector((state) => state.task.task)
  const data = tasks.filter(task => task._id === params.id)
  // console.log('hi',data);
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
      <TaskDetailsComponent data={data[0]} />
      <View className="flex flex-row justify-between items-center">
        <Text className="font-extrabold text-2xl dark:text-white">Upcoming Task</Text>
        <TouchableOpacity onPress={()=> router.push(`addTask`)} className="flex items-center flex-row gap-x-2 py-2 bg-rose-500 rounded-md px-4">
          <Text className="text-xl pb-1 text-white">+</Text>
          <Text className="text-white">Add Task</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          tasks.filter(task => task._id !== params.id).map((value, index) => (
            <TaskChip data={value} key={index} />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default TaskDetails