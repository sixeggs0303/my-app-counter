import { DECREASE, INCREASE } from "./actionTypes.js"

export const increaseSum = () => {
    return { type: INCREASE };
}

export const decreaseSum = () => {
    return { type: DECREASE };
}

