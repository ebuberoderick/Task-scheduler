const initialState = {
  schedule: []
}


const update = (e,data) => {
  const newState = data.map(obj =>
    obj._id === e.id ? { ...obj, status : e.status } : obj
  );
  return newState
}

const scheduleReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "ADD_SCHEDULE":
      return {
        ...state,
        schedule: [payload, ...state.schedule]
      }

      case "UPDATE_SCHEDULE":
        return {
          ...state,
          schedule: update(payload,[...state.schedule])
        }

      case "DELETE_SCHEDULE":
        return {
          ...state,
          schedule: payload
        }
      
    default:
      return state
  }
}

export default scheduleReducer
