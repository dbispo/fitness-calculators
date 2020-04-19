import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { calcBMI } from "./actions";

const ConnectedResult = ({bmi}) => {
    return (
        <div>
            <p><span>Your BMI is: </span> {bmi} </p>
        </div>
    )
}

const ConnectedButtons = ({calcBMI}) => {

    return (
        <>
            <Button onClick={calcBMI}>Calculate</Button>
            <Button>Clear</Button>
        </>
    )

}

const mapStateToProps = state => {
    return {
        bmi : state.bmi
    }
}

const mapDispatchToProps = dispatch => {
    return {
        calcBMI : () => dispatch(calcBMI())
    }
}

export const Result = connect(mapStateToProps)(ConnectedResult)
export const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons)