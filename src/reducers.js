import { CHANGE_SUM, RESET, CHANGE_SIZE } from "./actionTypes"
import { combineReducers } from "redux"

const sum = (state = 0, action) => {
    if (action.type === CHANGE_SUM) {
        return state + action.payload
    }
    if (action.type === RESET) {
        return 0
    }

    return state
}

const size = (state = 0, action) => {
    if (action.type === CHANGE_SIZE) {
        return action.payload
    }
    return state
}

export default combineReducers(
    {
        sum,
        size
    }
)