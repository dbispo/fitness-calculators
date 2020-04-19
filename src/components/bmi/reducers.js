import { ACTION_TYPES } from "./actions"

const initialState = {
    height : '',
    weight : '',
    bmi: ''
}

export function rootReducer(state = initialState, action) {

    if(action.type === ACTION_TYPES.CHANGE_HEIGHT) {
        state = {
            ...state,
            height : action.height,
            bmi: ''
        }
    }

    if(action.type === ACTION_TYPES.CHANGE_WEIGHT) {
        state = {
            ...state,
            weight : action.weight,
            bmi : ''
        }
    }

    if(action.type === ACTION_TYPES.CALC_BMI) {
        if(state.height && state.weight && state.height > 0) {
            const bmi =  parseInt(state.weight / (state.height*state.height))

            state = {
                ...state,
                bmi : bmi
            }
        }
    }

    return state;

}