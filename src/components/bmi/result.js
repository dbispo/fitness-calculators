import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { calcBMI, clearForm } from "./actions";
import { injectIntl } from "gatsby-plugin-intl";

const ConnectedResult = ({ bmi, result, intl }) => {
    if (result) {
        const msg = intl.formatMessage({id : result})
        return (
            <div>
                <p><span>{intl.formatMessage({ id: 'yourBMI' })}: </span> {bmi + ' - ' + msg} </p>
            </div>
        )
    }
    else {
        return (<></>)
    }
}

const ConnectedButtons = ({ calcBMI, clearForm, calcEnabled, intl }) => {

    return (
        <>
            <Button type="submit" onClick={calcBMI} disabled={!calcEnabled}>{intl.formatMessage({ id: 'calculate' })}</Button>
            <Button onClick={clearForm} variant="secondary">{intl.formatMessage({ id: 'clear' })}</Button>
        </>
    )

}

const mapStateToProps = state => {
    const calcEnabled = state.height && state.weight
    const bmi = state.bmi
    let result = undefined
    if (bmi) {
        if (bmi < 18.5) {
            result = 'underweight'
        }
        else if (bmi < 25) {
            result = 'normalweight'
        }
        else if (bmi < 30) {
            result = 'overweight'
        }
        else {
            result = 'obesity'
        }
    }
    return {
        bmi: state.bmi,
        result: result,
        calcEnabled: calcEnabled
    }
}

const mapDispatchToProps = dispatch => {
    return {
        calcBMI: () => dispatch(calcBMI()),
        clearForm: () => dispatch(clearForm())
    }
}

export const Result = connect(mapStateToProps)(injectIntl(ConnectedResult))
export const Buttons = connect(mapStateToProps, mapDispatchToProps)(injectIntl(ConnectedButtons))