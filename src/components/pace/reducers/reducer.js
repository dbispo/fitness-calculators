import { ACTION_TYPES } from "../actions/actions";

const initialState = {
    time : undefined,
    distance : undefined,
    pace : undefined
}

export function rootReducer(state = initialState, action) {

    if(action.type === ACTION_TYPES.CHANGE_TIME) {
        state = {
            ...state,
            time : action.payload
        }
    }

    else if(action.type === ACTION_TYPES.CHANGE_DISTANCE) {
        state = {
            ...state,
            distance : action.payload
        }
    }

    else if(action.type === ACTION_TYPES.CHANGE_PACE) {
        state = {
            ...state,
            pace : action.payload
        }
    }
    else if(action.type === ACTION_TYPES.CLEAR_FORM) {
        state = {
            ...state,
            time : undefined,
            distance : undefined,
            pace: undefined
        }
    }

    return state;
}
