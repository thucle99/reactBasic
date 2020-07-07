import {DECREMENT_NUMBER,INCREMENT_NUMBER} from './const'
export const decrementNumber = (val) =>({
    type:DECREMENT_NUMBER,
    val
})
export const incrementNumber = (val) =>({
    type:INCREMENT_NUMBER,
    val
})