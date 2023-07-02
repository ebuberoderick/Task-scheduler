const initialState = {
  task: []
}


const update = (e,data) => {

  const newState = data.map(obj =>
    obj._id === e.id ? { ...obj, status : e.status } : obj
  );

  return newState
}

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "ADD_TASK":
      return {
        ...state,
        task: [payload, ...state.task]
      }

    case "UPDATE_TASK":
      return {
        ...state,
        task: update(payload,[...state.task])
      }

    default:
      return state
  }
}

export default taskReducer
