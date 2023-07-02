import { View, Text, TouchableOpacity } from 'react-native'
import Draggable from 'react-native-draggable';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const TaskDetailsComponent = ({ data }) => {
    const dispatch = useDispatch()

    return (
        <View className="space-y-3">
            <View className="">
                <Text className="font-extrabold text-3xl dark:text-white">{data?.title}</Text>
                <Text className="text-lg relative bottom-1 text-gray-400">{data?.category}</Text>
            </View>
            <View className="flex relative bottom-2 flex-row gap-2 items-center">
                <View className="h-9 w-9 bg-rose-200 shadow-md shadow-rose-400 rounded-full"></View>
                <View className="flex-grow">
                    <View>
                        <Text className="text-base dark:text-white">{data?.date}, {data?.start_time} - {data?.end_time}</Text>
                    </View>
                </View>
            </View>

            <View className="">
                <Draggable maxX={150} minX={0} maxY={-13} minY={-13} shouldReverse x={0} y={-13}
                    children={(
                        <View className="w-full flex flex-row pb-1 px-1 justify-between">
                            <View className={`py-3 px-5 rounded-md ${data?.status === 'pending' ? 'bg-yellow-500' : data?.status === 'cancelled' ? 'bg-rose-500' : 'bg-teal-600'}`}><Text className="text-white">{data?.status}</Text></View>
                        </View>
                    )}
                    animatedViewProps={{ accessibilityHint: 'drag' }}
                    onDragRelease={(event, gestureState) => {
                        if (gestureState.moveX > 120) {
                            dispatch({ type: "UPDATE_TASK", payload: { id: data?._id, status: data?.status === 'pending' && 'completed' } })
                        }
                    }}
                    onLongPress={() => console.log('long pressed')}
                    disabled={data?.status === 'pending' ? false : true}
                />
            </View>

            <View className="relative top-5">
                <Text className="font-extrabold text-2xl dark:text-white">Task Description</Text>
                <Text className="text-base relative bottom-1 text-gray-400">
                    {data?.description}
                </Text>
            </View>
        </View>
    )
}

export default TaskDetailsComponent