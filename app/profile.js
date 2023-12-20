import { View, Text, ScrollView, TouchableOpacity, Switch, TextInput, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Stack, useRouter } from 'expo-router';
import TaskChip from './components/TaskChip';
import { Picker } from '@react-native-picker/picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import AddModal from './components/AddModal';
import { Image } from 'expo-image';

const profile = () => {
    const router = useRouter();
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
    const [currency, setCurrency] = useState('15');
    const [modalVisible, setModalVisible] = useState(false);
    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    return (
        <ScrollView className="flex flex-1 space-y-4 bg-white dark:bg-gray-900 h-screen w-screen p-3 pt-0">
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View className="flex flex-1 bg-gray-500 bg-opacity-25 p-3 items-center justify-center backdrop-blur-md">
                    <View className="w-full bg-white opacity-100 rounded-md p-4">
                        <Text>hi</Text>
                        <View className="flex flex-row gap-3">
                            <TouchableOpacity onPress={() => setModalVisible(false)} className="text-base flex-1 py-4 rounded-md">
                                <Text className="dark:text-white text-center">close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-rose-500 flex-1 text-base py-4 rounded-md">
                                <Text className="text-white text-center">Add Category</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <StatusBar style={statusBarTheme} />
            <Stack.Screen
                options={{
                    title: '',
                    headerBackVisible: true,
                    headerLeft: ()=> {
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
            <View className="flex relative bottom-2 flex-col gap-2 items-center">
                <View className="border-2 border-rose-500 p-1 relative rounded-full">
                    <View className="h-44 overflow-hidden w-44 bg-rose-100 rounded-full">
                        <Image
                            className="h-full w-full"
                            source={require(`./assets/avatar.png`)}
                            contentFit="cover"
                            transition={1000}
                        />
                    </View>
                    {/* <TouchableOpacity onPress={() => router.push(`addTask`)} className="h-12 w-12 flex items-center justify-center bg-rose-600 absolute bottom-0 rounded-full right-4">
                        <Text className="text-white text-4xl">+</Text>
                    </TouchableOpacity> */}
                </View>
                <View className="flex-grow">
                    <View>
                        <Text className="text-2xl font-extrabold text-center dark:text-white">User</Text>
                        {/* <Text className="text-base text-gray-400 text-center">ebuberoderick2@gmail.com</Text> */}
                    </View>
                </View>
            </View>
            {/* <View className="flex flex-row gap-x-4 px-5">
                <View className="py-3 px-2 rounded-md flex-1 bg-yellow-400 shadow-lg">
                    <Text className="text-4xl font-extrabold text-white text-center">10</Text>
                    <Text className="text-white text-center">pendind</Text>
                </View>
                <View className="py-3 px-2 rounded-md flex-1 bg-rose-700 shadow-lg">
                    <Text className="text-4xl font-extrabold text-white text-center">45</Text>
                    <Text className="text-white text-center">cancelled</Text>
                </View>
                <View className="py-3 px-2 rounded-md flex-1 bg-teal-600 shadow-lg">
                    <Text className="text-4xl font-extrabold text-white text-center">300</Text>
                    <Text className="text-white text-center">completed</Text>
                </View>
            </View> */}
            <View className="flex relative top-3 justify-between flex-row gap-2 items-center">
                <Text className="text-base capitalize dark:text-white">{colorScheme} mode</Text>
                <Switch value={colorScheme === 'dark'} onChange={() => toggleColorScheme()} />
            </View>
            <View className="flex justify-between flex-row gap-2 items-center">
                <Text className="text-base flex-1 capitalize dark:text-white">Pre noitify</Text>
                {/* <Text className="text-base capitalize text-gray-400">15 mins</Text> */}
                <View className="relative w-36">
                    <Picker
                        className="bg-black dark:text-white"
                        selectedValue={currency}
                        onValueChange={currentCurrency => setCurrency(currentCurrency)}>
                        <Picker.Item label="none" value="none" />
                        <Picker.Item label="5 mins" value="5" />
                        <Picker.Item label="10 mins" value="10" />
                        <Picker.Item label="15 mins" value="15" />
                        <Picker.Item label="20 mins" value="20" />
                        <Picker.Item label="30 mins" value="30" />
                    </Picker>
                </View>
            </View>
            <View className="space-y-5">
                <TouchableOpacity onPress={() => setModalVisible(true)} className="flex justify-between flex-row gap-2 items-center">
                    <Text className="text-base capitalize dark:text-white">Add Category</Text>
                </TouchableOpacity>
                <View className="flex justify-between flex-row gap-2 items-center">
                    <Text className="text-base capitalize dark:text-white">Remove Category</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('addTask')} className="flex justify-between flex-row gap-2 items-center">
                    <Text className="text-base capitalize dark:text-white">Add Task</Text>
                </TouchableOpacity>
                <View className="flex justify-between flex-row gap-2 items-center">
                    <Text className="text-base capitalize text-red-600">Logout</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default profile