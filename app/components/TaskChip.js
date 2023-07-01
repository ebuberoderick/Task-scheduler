import React from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const TaskChip = ({data}) => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={()=> router.push(`details/${data._id}`)} className="flex flex-row gap-2 items-center p-1 py-1 bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-600 rounded-md mb-4">
            <View className="h-14 w-14 bg-gray-400 rounded-full"></View>
            <View className="space-y-1 flex-grow">
                <View>
                    <Text className="font-extrabold text-base dark:text-white">{data.title}</Text>
                </View>
                <View className="">
                    <Text className="font-extrabold text-gray-400">
                        {data.start_time} - {data.end_time}
                    </Text>
                </View>
            </View>
            <View className="">
                {/* <AiOutlineEye /> */}
            </View>
        </TouchableOpacity>
    )
}

export default TaskChip;