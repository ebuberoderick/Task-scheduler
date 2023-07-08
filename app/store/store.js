// import {createStore} from 'redux'
// import reducers from './reducers'


// const store = createStore(reducers)
// export default store


 
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
AsyncStorage
 
import rootReducer from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}