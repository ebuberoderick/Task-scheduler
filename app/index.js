import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from './components/ProgressBar';
import TaskChip from './components/TaskChip';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs';
import { connect } from 'react-redux';



const Home = ({task}) => {

    const router = useRouter();
    const todayDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

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
                <View className="h-80 flex justify-center">
                    <Text className="text-red-400 font-semibold relative top-3 pl-3 text-2xl">Today's progress summary</Text>
                    <View className="flex flex-1 pl-3 relative">
                       <View className="absolute bg-white dark:bg-gray-800 w-32 h-48 rounded-lg right-12 top-10"></View> 
                        <View className="rounded-md py-2">
                            <View className="flex flex-row gap-2 items-end">
                                <Text className="font-extrabold text-5xl pt-10 text-white">{dayjs().format('hh:mm')}</Text>
                                <Text className="text-sm lowercase relative bottom-2 text-white">{dayjs().format('a')}</Text>
                            </View>
                            <Text className="text-white ">{todayDate.toLocaleString('en-IN', options)}</Text>
                        </View>
                        <View className="flex-grow space-y-1">
                            <Text className="text-white text-sm"> 12 Task </Text>
                            <View>
                                <View className="flex flex-row">
                                    <View className="w-12 h-12 border-2 border-white bg-rose-400 shadow-md rounded-full"></View>
                                    <View className="w-12 h-12 -ml-6 border-2 border-white bg-rose-400 shadow-md rounded-full"></View>
                                    <View className="w-12 h-12 -ml-6 border-2 border-white bg-rose-400 shadow-md rounded-full"></View>
                                    <View className="w-12 h-12 -ml-6 border-2 border-white bg-rose-400 shadow-md rounded-full"></View>
                                    <View className="w-12 h-12 -ml-6 border-2 border-white bg-rose-400 shadow-md rounded-full"></View>
                                </View>
                                <View className="w-full pr-3 pt-2">
                                    <ProgressBar />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text className="text-base font-extrabold text-white px-3 py-2 relative bottom-1">Today's Task</Text>
                </View>
                <View className="flex flex-auto p-3 bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                    <ScrollView showsVerticalScrollIndicator={false} className="bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                        {
                            task.map((value, index) => (
                                <TaskChip data={value} key={index} />
                            ))
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
    task : state.task.task
})

export default connect(mapStateToProps)(Home);