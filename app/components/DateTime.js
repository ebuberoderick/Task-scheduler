import { View, Text, Modal } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-modern-datepicker';

const DateTime = ({ showDate, showStartTime, showEndTime, setShowDate, setShowStartTime, setShowEndTime }) => {
    return (
        <View>
            {
                (showDate || showStartTime || showEndTime) &&
                (
                    <Modal>
                        <View className="flex flex-1 px-3 justify-center items-center">
                            {/* <Text>hi</Text> */}
                            {showDate &&
                                <DatePicker
                                    options={{
                                        backgroundColor: '#e11d48',
                                        textHeaderColor: '#FFF',
                                        textDefaultColor: '#F6E7C1',
                                        selectedTextColor: '#fff',
                                        mainColor: '#F4722B',
                                        textSecondaryColor: '#D6C7A1',
                                        borderColor: 'rgba(122, 146, 165, 0.1)',
                                    }}
                                    // minimumDate="2020-02-17"
                                    // maximumDate="2020-07-25"
                                    current="2020-07-13"
                                    // selected="2020-07-23"
                                    mode="calendar"
                                    minuteInterval={30}
                                    style={{ borderRadius: 10 }}
                                    onSelectedChange={date => setShowDate(date)}
                                />
                            }


                            {showStartTime &&
                                <DatePicker
                                    options={{
                                        backgroundColor: '#e11d48',
                                        textDefaultColor: '#F6E7C1',
                                        selectedTextColor: '#000',
                                        mainColor: '#FFF',
                                        textSecondaryColor: '#D6C7A1',
                                        borderColor: 'rgba(122, 146, 165, 0.1)',
                                    }}
                                    style={{ borderRadius: 10 }}
                                    mode="time"
                                    minuteInterval={1}
                                    onTimeChange={selectedTime => setShowStartTime(selectedTime)}
                                />
                            }


                            {showEndTime &&
                                <DatePicker
                                    options={{
                                        backgroundColor: '#e11d48',
                                        textDefaultColor: '#F6E7C1',
                                        selectedTextColor: '#000',
                                        mainColor: '#FFF',
                                        textSecondaryColor: '#D6C7A1',
                                        borderColor: 'rgba(122, 146, 165, 0.1)',
                                    }}
                                    style={{ borderRadius: 10 }}
                                    mode="time"
                                    minuteInterval={1}
                                    onTimeChange={selectedTime => setShowEndTime(selectedTime)}
                                />
                            }

                        </View>

                    </Modal>
                )
            }
        </View>
    )
}

export default DateTime