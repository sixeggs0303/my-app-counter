import { CHANGE_SIZE, CHANGE_SUM, RESET } from "./actionTypes"

export const changeSum = (value) => {
    return {
        type: CHANGE_SUM,
        payload: value
    }
}

export const changeSize = (size) => {
    return {
        type: CHANGE_SIZE,
        payload: size
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}