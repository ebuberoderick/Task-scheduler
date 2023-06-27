import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = async () => {
    try {
        let keys = []
        try {
          keys = await AsyncStorage.getAllKeys()
        } catch(e) {
          return e
        }
        return keys
    } catch (e) {
        return e
    }
}

const addTask = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        console.log(jsonValue);
        await AsyncStorage.setItem('my-key', jsonValue);
    } catch (e) {
        return e;
    }
}

export { storage, addTask }