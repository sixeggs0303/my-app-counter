import { combineReducers } from "redux"
import { DECREASE, INCREASE } from "./actionTypes"

const sum = (state = 0, action) => {
    if (action.type === INCREASE) {
        return state + 1
    }
    if (action.type === DECREASE) {
        return state - 1
    }
    return state
}

export default combineReducers(
    {
        sum
    }
)