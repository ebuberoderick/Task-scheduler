import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

const playground = () => {
    const [time, setTime] = useState('');
  
    return (
        <DatePicker
        mode="time"
        minuteInterval={3}
        onTimeChange={selectedTime => setTime(selectedTime)}
      />
    );
  }

export default playground