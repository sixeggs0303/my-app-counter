import { DECREASE, INCREASE, UPDATE_COUNTER_SIZE, RESET } from "./actionTypes.js"

export const increaseSum = () => {
    return { type: INCREASE };
}

export const decreaseSum = () => {
    return { type: DECREASE };
}

export const updateCounterSize = (size) => {
    return {
        type: UPDATE_COUNTER_SIZE,
        payload: size
    }
}

export const resetSum = () => {
    return { type: RESET };
}