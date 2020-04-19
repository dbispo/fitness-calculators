import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { calcBMI, clearForm } from "./actions";

const ConnectedResult = ({bmi}) => {
    return (
        <div>
            <p><span>Your BMI is: </span> {bmi} </p>
        </div>
    )
}

const ConnectedButtons = ({calcBMI, clearForm, calcEnabled}) => {

    return (
        <>
            <Button onClick={calcBMI} disabled={!calcEnabled}>Calculate</Button>
            <Button onClick={clearForm}>Clear</Button>
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

export const Result = connect(mapStateToProps)(ConnectedResult)
export const Buttons = connect(mapStateToProps, mapDispatchToProps)(ConnectedButtons)