import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from './components/ProgressBar';
import TaskChip from './components/TaskChip';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import * as Notification from 'expo-notifications'
import { useEffect, useState } from 'react';



const Home = ({ task }) => {
    const [time,setTime] = useState(dayjs().format('hh:mm'))
    const [dayLight,setDayLight] = useState(dayjs().format('a'))
    const router = useRouter();
    const [todayDate,settodayDate] = useState(new Date())
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    useEffect(() => {
        setInterval(() => {
            setTime(dayjs().format('hh:mm'));
            setDayLight(dayjs().format('a'))
            settodayDate(new Date())
        }, 1000 * 1); 
    }, []);


    return (
        <View className="flex flex-1 h-screen w-screen pt-0" >
            <StatusBar style={'light'} />
            <Stack.Screen options={{ header: () => null }} />
            <LinearGradient
                colors={['#e11d48', '#e11d48', '#9f1239']}
                className="rounded-md bg-gradient-to-r flex flex-1 h-screen w-screen pt-0"
                start={{ x: 0.78, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity onPress={() => router.push('profile')} className="flex flex-row gap-2 items-center pt-12 px-2">
                    <View className="h-9 w-9 bg-gray-400 rounded-full"></View>
                    <View className="flex-grow">
                        <View>
                            <Text className="font-extrabold text-base text-white">Hello, Roderick</Text>
                        </View>
                        <View className="">
                            <Text className="font-extrabold text-xs text-gray-200">
                                ebuberoderick2@gmail.com
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View className="h-64 flex justify-center">
                    <Text className="text-red-400 font-semibold relative top-3 pl-3 text-2xl">Today's progress summary</Text>
                    <View className="flex h-full flex-1 pl-3 relative">
                        <View className="flex flex-row gap-2 items-end">
                            <Text className="font-extrabold text-5xl pt-10 text-white">{time}</Text>
                            <Text className="text-sm uppercase relative bottom-2 text-white">{dayLight}</Text>
                        </View>
                        <Text className="text-white ">{todayDate.toLocaleString('en-IN', options)}</Text>
                        <View className="py-4 flex flex-row gap-3">
                            <TouchableOpacity onPress={() => router.push(`sms`)} className="inline-flex rounded-md py-3 px-5 bg-white flex-start">
                                <Text className="text-red-500 font-bold text-sm text-center">SMS Schedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push(`smsView`)} className="inline-flex rounded-md py-3 px-5 bg-red-500 flex-start">
                                <Text className="text-white font-bold text-sm text-center">View Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text className="text-base font-extrabold text-white px-3 py-2 relative bottom-1">Today's Task</Text>
                </View>
                <View className="flex flex-auto p-3 bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                    <ScrollView showsVerticalScrollIndicator={false} className="bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                        {
                            task.length > 0 ? 
                                task.map((value, index) => (
                                    <TaskChip data={value} key={index} />
                                ))
                            : 
                            <View className="flex h-full items-center justify-center"><Text className="text-gray-400 uppercase">NO Task Today</Text></View>
                        }
                    </ScrollView>
                </View>
            </LinearGradient>
            <TouchableOpacity onPress={() => router.push(`addTask`)} className="h-12 w-12 flex shadow-md shadow-rose-500 items-center justify-center bg-rose-600 absolute bottom-3 rounded-full right-4">
                <Text className="text-white text-4xl">+</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    task: state.task.task
})

export default connect(mapStateToProps)(Home);