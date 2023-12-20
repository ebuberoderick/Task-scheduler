import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import scheduleReducer from './scheduleReducer'


const reducers = combineReducers({
    task: taskReducer,
    schedule: scheduleReducer
})

export default reducers
