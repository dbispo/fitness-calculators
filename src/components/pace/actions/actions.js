export const ACTION_TYPES = {
    CHANGE_TIME : 'CHANGE_TIME',
    CHANGE_DISTANCE : 'CHANGE_DISTANCE',
    CHANGE_PACE : 'CHANGE_PACE',
    CLEAR_FORM : 'CLEAR_FORM'
}

export function changeTime(time) {
    return {
        type : ACTION_TYPES.CHANGE_TIME,
        payload : time
    }
}

export function changeDistance(distance) {
    return {
        type : ACTION_TYPES.CHANGE_DISTANCE,
        payload : distance
    }
}

export function changePace(pace) {
    return {
        type : ACTION_TYPES.CHANGE_PACE,
        payload : pace
    }
}

export function clearForm() {
    return {
        type : ACTION_TYPES.CLEAR_FORM
    }
}