
export const ACTION_TYPES = {
    CHANGE_HEIGHT : 'CHANGE_HEIGHT',
    CHANGE_WEIGHT : 'CHANGE_WEIGHT',
    CALC_BMI: 'CALC_BMI'
}


export function changeHeight(height) {
    return {
        type: ACTION_TYPES.CHANGE_HEIGHT,
        height: height
    }
}

export function changeWeight(weight) {
    return {
        type: ACTION_TYPES.CHANGE_WEIGHT,
        weight : weight
    }
}

export function calcBMI() {
    return {
        type: ACTION_TYPES.CALC_BMI
    }
}