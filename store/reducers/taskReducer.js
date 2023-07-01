const initialState = {
    task : []
}

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_TASK":
    return { 
        ...state,
        task: [payload, ...state.task]
    }

  default:
    return state
  }
}

export default taskReducer
