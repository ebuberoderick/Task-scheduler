import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from './components/ProgressBar';
import TaskChip from './components/TaskChip';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
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
                start={{ x: 0.58, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity onPress={()=> router.push('profile')} className="flex flex-row gap-2 items-center pt-12 px-2">
                    <View className="h-9 w-9 bg-gray-400 rounded-full"></View>
                    <View className="flex-grow">
                        <View>
                            <Text className="font-extrabold text-xl text-white">Hello, Roderick</Text>
                        </View>
                        <View className="">
                            <Text className="font-extrabold text-gray-200">
                                ebuberoderick2@gmail.com
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View className="h-96 flex justify-center">
                    {/* <View className="h-54 space-y-4 rounded-md p-3 py-4">
                        <Text className="text-red-300 font-semibold text-4xl">Today's progress summary</Text>
                        <Text className="text-white text-xl"> 12 Task </Text>
                        <View>
                            <ProgressBar />
                        </View>
                        <Text className="text-white text-xl">{todayDate.toLocaleString('en-IN', options)}</Text>
                    </View> */}
                </View>
                <View>
                    <Text className="text-2xl font-extrabold text-white px-3 py-2">Today's Task</Text>
                </View>
                <View className="flex flex-1 p-3 bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                    <ScrollView showsVerticalScrollIndicator={false} className="flex flex-1 bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
                                <TaskChip data={value} key={index} />
                            ))
                        }
                    </ScrollView>
                </View>

            </LinearGradient>
            <TouchableOpacity onPress={() => router.push(`addTask`)} className="h-12 w-12 flex items-center justify-center bg-rose-600 absolute bottom-3 rounded-full right-4">
                <Text className="text-white text-4xl">+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;