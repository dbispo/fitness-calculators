import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { calcBMI, clearForm } from "./actions";
import { injectIntl } from "gatsby-plugin-intl";

const ConnectedResult = ({bmi, intl}) => {
    return (
        <div>
            <p><span>{intl.formatMessage({id : 'yourBMI'})}: </span> {bmi} </p>
        </div>
    )
}

const ConnectedButtons = ({calcBMI, clearForm, calcEnabled, intl}) => {

    return (
        <>
            <Button onClick={calcBMI} disabled={!calcEnabled}>{intl.formatMessage({id : 'calculate'})}</Button>
            <Button onClick={clearForm} variant="secondary">{intl.formatMessage({id : 'clear'})}</Button>
        </>
    )

}

const mapStateToProps = state => {
    const calcEnabled = state.height && state.weight
    return {
        bmi : state.bmi,
        calcEnabled : calcEnabled
    }
}

const mapDispatchToProps = dispatch => {
    return {
        calcBMI : () => dispatch(calcBMI()),
        clearForm : () => dispatch(clearForm())
    }
}

export const Result = connect(mapStateToProps)(injectIntl(ConnectedResult))
export const Buttons = connect(mapStateToProps, mapDispatchToProps)(injectIntl(ConnectedButtons))